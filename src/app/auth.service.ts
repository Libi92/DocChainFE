import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  doLogin(user: any): Observable<any> {
    return this.http.post<any>(AppConstants.BASE_URL + 'login', user);
  }

  doRegister(data: any): Observable<any> {
    return this.http.post<any>(AppConstants.BASE_URL + 'register', data);
  }
}
