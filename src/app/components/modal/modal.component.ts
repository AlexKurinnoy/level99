import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PersonModel} from '../../store/models/person.model';

export interface ModalTask {
  name: string;
  surname: string;
  city: string;
  completed: boolean;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {
  task: ModalTask = {
        name: '',
        surname: '',
        city: '',
        completed: false
  };

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {'person': PersonModel}) {

    this.task.name =  data.person.name;
    console.log(JSON.stringify(  this.task.name))
    this.task.surname =  data.person.surname;
    this.task.city =  data.person.city;
    this.task.completed = false;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
