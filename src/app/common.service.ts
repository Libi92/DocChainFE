import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() {
  }

  private _loggedInUser;

  get loggedInUser() {
    return this._loggedInUser;
  }

  set loggedInUser(value) {
    this._loggedInUser = value;
  }
}
