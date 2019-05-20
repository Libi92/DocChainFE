import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  getStatus(req: any): Observable<any> {
    return this.http.get<any>(AppConstants.BASE_URL + 'home/status', req);
  }
}
