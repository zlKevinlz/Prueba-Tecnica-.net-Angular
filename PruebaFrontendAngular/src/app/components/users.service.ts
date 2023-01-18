import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    public _httpClient : HttpClient
  ) { }

  listUsers(search: any){
    let url = 'https://api.github.com/search/users?';

    if(search){
      url = `${url}q=${search}`
    }

    return this._httpClient.get(url);

  }

  getInformation(url:string){
    return this._httpClient.get(url);
  }
}
