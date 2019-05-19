import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() {
  }

  private _loggedInUser;
  private _settingsUrl;

  get loggedInUser() {
    return this._loggedInUser;
  }

  set loggedInUser(value) {
    this._loggedInUser = value;
  }


  get settingsUrl() {
    return this._settingsUrl;
  }

  set settingsUrl(value) {
    this._settingsUrl = value;
  }
}
