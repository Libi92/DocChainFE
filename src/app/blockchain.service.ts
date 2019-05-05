import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AppConstants} from './app.constants';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor(private http: HttpClient) {
  }

  addUniversity(universityId, name): Observable<any> {
    const req = {
      '$class': 'com.app.edunet.University',
      'universityId': universityId,
      'name': name
    };
    return this.http.post<any>(AppConstants.BLOCKCHAIN_BASE_URL + 'University', req);
  }

  addCompany(companyId, name): Observable<any> {
    const req = {
      '$class': 'com.app.edunet.Company',
      'companyId': companyId,
      'name': name
    };
    return this.http.post<any>(AppConstants.BLOCKCHAIN_BASE_URL + 'Company', req);
  }

  addStudent(userId, name): Observable<any> {
    const req = {
      '$class': 'com.app.edunet.User',
      'userId': userId,
      'firstName': name,
      'lastName': '--'
    };
    return this.http.post<any>(AppConstants.BLOCKCHAIN_BASE_URL + 'User', req);
  }

  addExperience(req: any): Observable<any> {
    return this.http.post<any>(AppConstants.BLOCKCHAIN_BASE_URL + 'Experience', req);
  }

  addCertificate(req: any): Observable<any> {
    return this.http.post<any>(AppConstants.BLOCKCHAIN_BASE_URL + 'Certificate', req);
  }
}
