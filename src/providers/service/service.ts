import { Storage } from '@ionic/storage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Headers, RequestOptions } from '@angular/http';
import { User } from '../../models/user.model'
import "rxjs/add/operator/map";



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-auth': 'my token'
  })
};

@Injectable()
export class ServiceProvider {

  private expressUrl = 'http://192.168.0.74:3000'


  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Hello ServiceProvider Provider');
  }

  createUserHttp(user: User) {
    const url = `${this.expressUrl}/users`;
    return this.http.post(url, JSON.stringify(user), httpOptions);
  }

  userSignInHttp(param) {
    const url = `${this.expressUrl}/users/login`;
    return this.http.post(url, JSON.stringify(param), httpOptions)
  }

  getUserDetailHttp(token: string){
    httpOptions.headers = httpOptions.headers.set('x-auth', token);
    const url = `${this.expressUrl}/getuser`;
    return this.http.get(url, httpOptions)
      .map(resp =>  new User().deserialize(resp));
  }

  userLogOutHttp(token: string) {
    const url = `${this.expressUrl}/users/logout`;
    httpOptions.headers = httpOptions.headers.set('x-auth', token);
    return this.http.delete(url, httpOptions);
  }

  storeUserToken(token) {
    this.storage.set("token", token);
  }

  getUserToken() {
    var token = this.storage.get('token');
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
