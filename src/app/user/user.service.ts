import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static USER = 'user';
  private static PROFILE = 'profile';

  constructor(private http: HttpClient) {
  }

  getProfile(user: any): Observable<any> {
    return this.http.post<any>(AppConstants.BASE_URL + UserService.USER + '/' + UserService.PROFILE + '/get', user);
  }
}
