import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {PersonState} from './store/state/person.state';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { TableRenderComponent } from './components/table-render/table-render.component';
import { TablesViewerComponent } from './components/tables-viewer/tables-viewer.component';
import {OperationService} from './services/operation.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    TableRenderComponent,
    TablesViewerComponent,
    ModalComponent
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      PersonState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
