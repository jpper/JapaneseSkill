import { Component, OnInit } from '@angular/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import {Http} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  isUserLoggedIn: any = false;
  userInfo: any = {};

  constructor(public fb: Facebook,
              public http: Http,
              private afauth: AngularFireAuth) {

  }

  ngOnInit() {
  }

  loginWithFB() {
    // this.fb.login(['public_profile', 'email']).then( loginRes => {
    //   this.fb.api('me/?fields=id,email,first_name,picture', ['public_profile', 'email']).then( apiRes => {
    //     this.userInfo = apiRes;
    //     this.isUserLoggedIn = true;
    //   });
    // }).catch( loginErr => console.log(loginErr));
  }

  logoutWithFB() {
    // this.fb.logout().then( logoutRes => {
    //   this.isUserLoggedIn = false;
    // }).catch(logoutErr => console.log(logoutErr));
  }

}
