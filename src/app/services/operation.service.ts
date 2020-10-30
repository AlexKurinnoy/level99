import { Injectable } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {CopyTable, EditPerson, RemovePerson, RemoveTable} from '../store/action/person.action';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private store: Store) { }

  public copyTable(table): void{
     this.store.dispatch(new CopyTable(this.deepClone(table)));
  }


  public removeTable(table): void{
    this.store.dispatch(new RemoveTable(table));
  }


  public removeRow(peopleArr, serialArr): void{
    this.store.dispatch(new RemovePerson(peopleArr, serialArr));
  }

  public editRow(person, serialArr): void{
    console.log(JSON.stringify(person))
    this.store.dispatch(new EditPerson(person, serialArr));
  }



  private deepClone = obj => {
    if (obj === null) return null;
    let clone = Object.assign({}, obj);

    Object.keys(clone).forEach(
      key =>
        (clone[key] =
          typeof obj[key] === "object" ? this.deepClone(obj[key]) : obj[key])
    );
    return Array.isArray(obj) && obj.length
      ? (clone.length = obj.length) && Array.from(clone)
      : Array.isArray(obj)
        ? Array.from(obj)
        : clone;
  };

}
