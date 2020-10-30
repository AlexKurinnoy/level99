import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {PeopleModel} from '../../store/models/person.model';
import {OperationService} from '../../services/operation.service';
import {AddPerson} from '../../store/action/person.action';


@Component({
  selector: 'app-tables-viewer',
  templateUrl: './tables-viewer.component.html',
  styleUrls: ['./tables-viewer.component.css']
})
export class TablesViewerComponent implements OnInit {
@Select(state => state.allPeople.allPeople) allPeople$: Observable<PeopleModel[]>;



  constructor(public operationService: OperationService) {
  }
  public copy(table): void{
    this.operationService.copyTable(table)
  }
  public del(serial): void{
    this.operationService.removeTable(serial)
  }
  ngOnInit(): void {  }


}
