import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class HomeModule { }
