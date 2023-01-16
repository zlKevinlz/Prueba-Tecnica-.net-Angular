import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;
  search = 'zlkevinlz';

  view = 'table'; //cards - table

  constructor(
    private _usersService: UsersService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.listUsers();
  }


  openDialogUSer(user: any) {
    const dialogRefForm = this.dialog.open(DialogUserComponent, {
      width: '400px',
      height: 'auto',
      data: { user: user }
    });
  }

  listUsers() {
    this._usersService.listUsers(this.search).subscribe((response: any) => {
      this.users = response.items;
    })
  }

}
