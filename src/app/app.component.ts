import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorage,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Check if the user is already logged in
      // We don't want to ask users to log in each time
      this.nativeStorage.getItem('facebook_user')
      .then( data => {
        this.router.navigate(['/menu/first']);
        this.splashScreen.hide();
      }, err => {
        // We don't have the user data so go to login
        this.router.navigate(['/login']);
        this.splashScreen.hide();
      });
      this.statusBar.styleDefault();
    });
  }
}
