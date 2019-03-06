import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  auth = false;
  constructor() {
    if (localStorage.getItem("auth") == "yes")
      this.auth = true
  }
  login() {
    localStorage.setItem("auth", "yes");
  }
  logout() {
    localStorage.removeItem("auth");
    this.auth = true;
  }
}
