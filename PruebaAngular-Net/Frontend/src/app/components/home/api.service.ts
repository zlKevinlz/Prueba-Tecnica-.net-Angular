import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  APIURL = 'https://localhost:7001/';

  constructor(
    private _httpClient: HttpClient
  ) { }

  listPeople() : Observable<any>{
    return this._httpClient.get(`${this.APIURL}api/People/List`);
  }

  createPerson(person:any){
    return this._httpClient.post(`${this.APIURL}api/People/Create`, person);
  }

  listUsers() : Observable<any>{
    return this._httpClient.get(`${this.APIURL}api/Users/List`);
  }

  createUser(user:any){
    return this._httpClient.post(`${this.APIURL}api/Users/Create`, user);
  }

  login(user:any){
    return this._httpClient.post(`${this.APIURL}api/Users/Login`, user);
  }
}
