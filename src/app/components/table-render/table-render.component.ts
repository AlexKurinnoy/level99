import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {PersonModel} from '../../store/models/person.model';

import {OperationService} from '../../services/operation.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';



@Component({
  selector: 'app-table-render',
  templateUrl: './table-render.component.html',
  styleUrls: ['./table-render.component.css'],

})
export class TableRenderComponent implements OnInit {
  @Input() data: PersonModel[];
  @Input() serialArr: number;
  displayedColumns: string[] = [ 'name', 'surname', 'age', 'city', 'action'];

  constructor(public operationService: OperationService, public dialog: MatDialog) {
  }
  ngOnInit(): void {

  }

  public delRow(personArr: PersonModel, serialArr: number): void{
    this.operationService.removeRow(personArr, serialArr);
  }

  public editRow(person: PersonModel, serialArr: number): void{
    console.log(JSON.stringify(person))
    this.operationService.editRow(person, serialArr)
  }

  public openDialog(person, serial): void {
      const dialogRef = this.dialog.open(ModalComponent, {
        data: {"person": person}
      });

      dialogRef.afterClosed().subscribe(result => {

        person.name = result.name;
        person.surname = result.surname;
        person.city = result.city;
        console.log('The dialog was closed ' +  JSON.stringify(person));
        this.editRow(person, serial);
      });
    }

}
