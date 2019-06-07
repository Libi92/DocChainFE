import {Injectable} from '@angular/core';
import {AppConstants} from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() {
  }

  private _loggedInUser;

  get loggedInUser() {
    this._loggedInUser = JSON.parse(localStorage.getItem(AppConstants.LOGGEDIN_USER));
    return this._loggedInUser;
  }

  set loggedInUser(value) {
    this._loggedInUser = value;
    localStorage.setItem(AppConstants.LOGGEDIN_USER, JSON.stringify(value));
  }

  private _settingsUrl;

  get settingsUrl() {
    this._settingsUrl = localStorage.getItem(AppConstants.SETTINGS_URL);
    return this._settingsUrl;
  }

  set settingsUrl(value) {
    this._settingsUrl = value;
    localStorage.setItem(AppConstants.SETTINGS_URL, value);
  }
}
