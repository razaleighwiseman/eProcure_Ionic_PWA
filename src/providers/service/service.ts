import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'
import { Headers, RequestOptions } from '@angular/http';
import {User} from '../../models/user.model'



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth': 'my token'
  })
};

@Injectable()
export class ServiceProvider {

  private tokens = new BehaviorSubject<any>(String);
  token = this.tokens.asObservable();


  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello ServiceProvider Provider');
  }

  createUserHttp(user:User) {
    return this.http.post('http://192.168.0.74:3000/users', JSON.stringify(user), httpOptions);
  }

  userSignInHttp(param) {
    return this.http.post('http://192.168.0.74:3000/users/login', JSON.stringify(param), httpOptions);
  }

  userLogOutHttp(token: string) {
    console.log(token);
    httpOptions.headers = httpOptions.headers.set('x-auth', token);
    console.log(httpOptions);
    return this.http.delete("http://192.168.0.74:3000/users/logout", httpOptions);
  }

  storeUserToken(token) {
    this.storage.set("token", token);
  }

  getUserToken() {
    var token =this.storage.get('token');
    this.tokens.next(token);
    return token;
  }

  deleteUserToken() {
    return new Promise((resolve, reject) => {
      this.storage.clear().then((success) => {
        resolve();
      }).catch((e) => {
        reject();
      });

    })
  }

}
