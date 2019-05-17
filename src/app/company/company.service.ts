import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private static COMPANY = 'company';

  constructor(private http: HttpClient) {
  }

  hire(req: any): Observable<any> {
    return this.http.post<any>(AppConstants.BASE_URL + CompanyService.COMPANY + '/hire', req);
  }
}
