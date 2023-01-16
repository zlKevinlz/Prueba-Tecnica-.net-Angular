import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogUserComponent } from './dialog-user/dialog-user.component';


@NgModule({
  declarations: [UsersComponent, DialogUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ]
})
export class UsersModule { }
