import { State, Action, StateContext, Selector} from '@ngxs/store';
import { PersonModel , PeopleModel} from '../models/person.model';
import {AddPerson, RemovePerson, RemoveTable, CopyTable, EditPerson} from '../action/person.action';


export class PersonStateModel {
  allPeople: PeopleModel[];
}

const initialPerson: PersonModel[] = [{
  serial: 0,
  name: '',
  surname: '',
  age: null,
  city: '',
}];

const initialPeople: PeopleModel[] = [
  {
    people: initialPerson,
    primary: true,
    serial: 0
  }
]

@State<PersonStateModel>({
  name: 'allPeople',
  defaults: {
    allPeople: initialPeople,
  }
})

export class PersonState {
  @Selector()
  static getPeople(state: PersonStateModel){
    return state.allPeople;
  }

  @Action(AddPerson)
  add({getState, patchState}: StateContext<PersonStateModel>, { payload }: AddPerson){
    payload.serial = Date.now()
    console.log(  payload.serial )
    const state = getState();
    if (state.allPeople[0].people[0].serial === 0 ){
      state.allPeople[0].people.splice(0, 1);
    }
    state.allPeople[0].people = [...state.allPeople[0].people, payload]
    patchState({
       allPeople: state.allPeople
    });
  }

  @Action(RemovePerson)
  remove({getState, patchState}: StateContext<PersonStateModel>, { payload, serialArr }: RemovePerson){
      const state = getState()
      const indexInArr = state.allPeople.findIndex(item => item.serial === serialArr);
      state.allPeople[indexInArr].people = state.allPeople[indexInArr].people.filter(e => e.serial !== payload.serial);
      patchState({
        allPeople: state.allPeople,
       });
      if(state.allPeople[indexInArr].people.length === 0){
          state.allPeople[indexInArr].people[0] = {
            serial: 0,
            name: '',
            surname: '',
            age: null,
            city: '',
          }
          patchState({
            allPeople: state.allPeople
          });
      }
  }

  @Action(EditPerson)
  edit({getState, patchState}: StateContext<PersonStateModel>, { payload, serialArr }: EditPerson){
    console.log(JSON.stringify(payload))
    const state = getState()
    state.allPeople[serialArr].people.map( e => {
      if (e.serial === payload.serial){
        console.log(JSON.stringify(payload))
        e = payload;
        console.log(JSON.stringify(e))
      }
    });
    patchState({
      allPeople: state.allPeople
    });
  }

  @Action(RemoveTable)
  removeTable({getState, patchState}: StateContext<PersonStateModel>, { payload }: RemoveTable){
     patchState({
      allPeople: getState().allPeople.filter(e => e.serial !== payload)
    });
  }

  @Action(CopyTable)
  copyTable({getState, patchState}: StateContext<PersonStateModel>, { payload }: CopyTable){
    const state = getState()
    payload.primary = false
    const indexInArr = state.allPeople.findIndex(item => item.serial === payload.serial) + 1;
    payload.serial = Date.now()
    state.allPeople.splice(indexInArr, 0, payload);
    patchState({
      allPeople:  state.allPeople
    });
  }




}



