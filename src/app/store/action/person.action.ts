import { PersonModel, PeopleModel } from '../models/person.model';

export class AddPerson {
  static readonly type = '[PERSON] Add';
  constructor(public payload: PersonModel){}
}

export class RemovePerson {
  static readonly type = '[PERSON] RemovePerson';
  constructor(public payload: PersonModel, public serialArr: number){}
}
export class EditPerson {
  static readonly type = '[PERSON] EditPerson';
  constructor(public payload: PersonModel, public serialArr: number){}
}

export class CopyTable {
  static readonly type = '[PEOPLE] Copy';
  constructor(public payload: PeopleModel){}
}

export class RemoveTable {
  static readonly type = '[PEOPLE] Remove';
  constructor(public payload: number){}
}



