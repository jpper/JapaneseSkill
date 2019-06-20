import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { LoadingController, Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData: any;
  FB_APP_ID = 673913583068118;

  constructor(
    private fb: Facebook,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
    private platform: Platform,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  // loginWithFB() {
  //   this.facebook.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
  //     this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
  //       this.userData = { email: profile.email, first_name: profile.first_name, picture: profile.picture_large['data'].url, username: profile.name};
  //     });
  //   });
  // }

  async doFbLogin() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);

    // the permissions your facebook app needs from the user
    const permissions = ['public_profile', 'email'];

    this.fb.login(permissions)
      .then(response => {
        const userId = response.authResponse.userID;

        // Getting name and gender properties
        this.fb.api('/me?fields=name,email', permissions)
          .then(user => {
            user.picture = 'https://graph.facebook.com/' + userId + '/picture?type=large';
            // now we have the users info, let's save it in the NativeStorage
            this.nativeStorage.setItem('facebook_user',
              {
                name: user.name,
                email: user.email,
                picture: user.picture
              })
              .then(() => {
                this.router.navigate(['/menu/first']);
                loading.dismiss();
              }, error => {
                console.log(error);
                loading.dismiss();
              });
          });
      }, error => {
        console.log(error);
        loading.dismiss();
      });
  }

  async presentLoading(loading) {
    return await loading.present();
  }


}
