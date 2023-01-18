import { LoginModalComponent } from './../login-modal/login-modal.component';
import { NewPersonModalComponent } from './../new-person-modal/new-person-modal.component';
import {MatDialog} from '@angular/material/dialog';
import { ApiService } from './api.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NewUserModalComponent } from './../new-user-modal/new-user-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumnsPeople: string[] = ['Fullname', 'Email', 'DNI', 'DNI_type', 'Date_created'];
  people = new MatTableDataSource();

  displayedColumnsUsers:  string[] = ['username', 'date_created']
  users = new MatTableDataSource();
  

  constructor(
    public _apiService : ApiService,
    public dialog: MatDialog
  ) { 
    
  }

  ngOnInit(): void {
    this.listPeople();
    this.listUsers();
  }

  listPeople(){
    this._apiService.listPeople().subscribe( (response : any) => {
      this.people = response;
    })
  }

  listUsers(){
    this._apiService.listUsers().subscribe( (response : any) => {
      this.users = response;
    })
  }

  openModalNewPerson(){
    const dialogRef = this.dialog.open( NewPersonModalComponent, {
      maxWidth: '90%',
      maxHeight: '90%',
      panelClass: 'cropper-modal'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if (result) {
        this.listPeople();
      }
    });
  }

  openModalNewUser(){
    const dialogRef = this.dialog.open( NewUserModalComponent, {
      maxWidth: '90%',
      maxHeight: '90%',
      panelClass: 'cropper-modal'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if (result) {
        this.listUsers();
      }
    });
  }

  openLoginModal(){
    const dialogRef = this.dialog.open( LoginModalComponent, {
      maxWidth: '90%',
      maxHeight: '90%',
      panelClass: 'cropper-modal'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if (result) {
        this.listUsers();
      }
    });
  }

}
