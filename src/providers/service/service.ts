import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class ServiceProvider {


  token: any;
  constructor(public http: HttpClient,private storage:Storage) {
    console.log('Hello ServiceProvider Provider');
  }

  userSignInHttp(param) {
    return this.http.post('http://localhost:3000/users/login', JSON.stringify(param), httpOptions);
  }

  userLogOutHttp(){
    var token = this.getUserCredentials();
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('authentication', ''+token);

    return this.http.delete("http://localhost:3000/users/logout");
  }

  storeUserCredentials(token){
    this.storage.set("token",token);
  }

  getUserCredentials(){
    return this.storage.get('token');
  }

}
