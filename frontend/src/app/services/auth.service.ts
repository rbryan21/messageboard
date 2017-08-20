import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  BASE_URL = 'http://localhost:56985/auth';

  register(user) {
    this.http.post(this.BASE_URL + '/register', user).subscribe();
  }

}
