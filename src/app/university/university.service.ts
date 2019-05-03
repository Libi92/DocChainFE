import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private static STUDENT = 'student';

  constructor(private http: HttpClient) {
  }

  addStudent(user: any): Observable<any> {
    return this.http.post<any>(AppConstants.BASE_URL + UniversityService.STUDENT + '/create', user);
  }
}
