import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;
  search = 'zlkevinlz';

  user : any;

  view = 'table'; //cards - table

  constructor(
    private _usersService: UsersService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers() {
    this._usersService.listUsers(this.search).subscribe((response: any) => {
      this.users = response.items;
    })
  }

  selectUser( user: any ){
    this.user = user;

    this._usersService.getInformation(this.user.followers_url).subscribe( (response:any ) => {
      this.user.followers_url = response.length;
    });

    this._usersService.getInformation(this.user.repos_url).subscribe( (response:any ) => {
      if(response.length != 0){
        this.user.repos = response;
      }else{
        this.user.repos = [];
      }
    })

    this._usersService.getInformation(this.user.organizations_url).subscribe( (response:any ) => {
      if(response.length != 0){
        this.user.organizations = response;
      }else{
        this.user.organizations = [];
      }
    })

    this._usersService.getInformation(this.user.url).subscribe( (response:any ) => {
      this.user.following = response.following;
      this.user.name = response.name
    })
  }

  navigateToHome() {
    this._router.navigate(['home']);
  }

}
