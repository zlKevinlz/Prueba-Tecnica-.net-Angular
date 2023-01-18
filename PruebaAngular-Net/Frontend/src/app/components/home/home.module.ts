import { LoginModalComponent } from './../login-modal/login-modal.component';
import { NewPersonModalComponent } from './../new-person-modal/new-person-modal.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NewUserModalComponent } from '../new-user-modal/new-user-modal.component';


@NgModule({
  declarations: [HomeComponent, NewPersonModalComponent, NewUserModalComponent, LoginModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule
  ]
})
export class HomeModule { }
