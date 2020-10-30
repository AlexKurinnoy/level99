export  interface PersonModel {
  serial?: number;
  name: string;
  surname: string;
  age: number;
  city: string;

}
export  interface PeopleModel {
  people: PersonModel[];
  serial?: number;
  primary: boolean;
}
