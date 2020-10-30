import { Component, OnInit } from '@angular/core';
import {Store} from '@ngxs/store';
import {AddPerson} from '../../store/action/person.action';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  verticalControl: FormGroup;
  horizontalControl: FormGroup;

  constructor(private store: Store) { }



  ngOnInit(): void {
    this.verticalControl = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('([a-zA-Z]{2,30}\\s*)+')]),
      surname: new FormControl('', [
        Validators.required,
        Validators.pattern('([a-zA-Z]{2,30}\\s*)+')]),
      age: new FormControl(null, [
        Validators.required,
        Validators.pattern('^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|150)$'),
        Validators.maxLength(3)]),
      city: new FormControl('', Validators.required)
    });

    this.horizontalControl = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.pattern('([a-zA-Z]{2,30}\\s*)+')]),
      surname: new FormControl('', [
        Validators.required,
        Validators.pattern('([a-zA-Z]{3,30}\\s*)+')]),
      age: new FormControl(null, [
        Validators.pattern('^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|150)$'),
        Validators.required,
        Validators.maxLength(3)]),
      city: new FormControl('', Validators.required)
    });

    this.verticalControl.valueChanges.subscribe(e => {
      this.horizontalControl.patchValue({
        name: e.name,
        surname: e.surname,
        age: e.age,
        city: e.city
         });
      });
  }

  public onSubmitVertical(): void {
    this.store.dispatch(new AddPerson(this.verticalControl.value))
    this.verticalControl.reset();
    this.horizontalControl.reset();
  }

  public onSubmitHorizontal(): void {
    this.store.dispatch(new AddPerson(this.horizontalControl.value))
    this.horizontalControl.reset();
    this.verticalControl.reset();
  }


}
