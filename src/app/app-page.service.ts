import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppPageService {

  appPages: any = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'List', url: '/list', icon: 'list' },
    //{ title: 'Buku', url: '/buku', icon: 'book' },
    { title: 'Login', url: '/login', icon: 'contact' }
  ];
  constructor() { }

  setAppPage(appPages){
    this.appPages = appPages;
  }
}
