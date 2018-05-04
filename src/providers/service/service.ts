import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import {User} from '../../models/user.model'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth': 'my token'
  })
};

var token;

@Injectable()
export class ServiceProvider {


  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello ServiceProvider Provider');
  }

  createUserHttp(user:User) {
    return this.http.post('http://localhost:3000/users', JSON.stringify(user), httpOptions);
  }

  userSignInHttp(param) {
    return this.http.post('http://localhost:3000/users/login', JSON.stringify(param), httpOptions);
  }

  userLogOutHttp(token: string) {
    console.log(token);
    httpOptions.headers = httpOptions.headers.set('x-auth', token);
    console.log(httpOptions);
    return this.http.delete("http://localhost:3000/users/logout", httpOptions);
  }

  storeUserCredentials(token) {
    this.storage.set("token", token);
  }

  getUserCredentials() {
    return this.storage.get('token');
  }

  deleteUserCredential() {
    return new Promise((resolve, reject) => {
      this.storage.clear().then((success) => {
        resolve();
      }).catch((e) => {
        reject();
      });

    })
  }

}
