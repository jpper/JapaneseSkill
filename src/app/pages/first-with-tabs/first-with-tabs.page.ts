import { Component, OnInit } from '@angular/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-with-tabs',
  templateUrl: './first-with-tabs.page.html',
  styleUrls: ['./first-with-tabs.page.scss'],
})
export class FirstWithTabsPage implements OnInit {

  user: any;
  userReady = false;

  constructor(
    private fb: Facebook,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    private router: Router,
  ) { }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await loading.present();
    this.nativeStorage.getItem('facebook_user')
      .then(data => {
        this.user = {
          name: data.name,
          email: data.email,
          picture: data.picture
        };
        loading.dismiss();
        this.userReady = true;
      }, error => {
        console.log(error);
        loading.dismiss();
      });
  }

  doFbLogout() {
    this.fb.logout()
      .then(res => {
        // User logged out so we will remove him from the NativeStorage
        this.nativeStorage.remove('facebook_user');
        this.router.navigate(['/login']);
      }, error => {
        console.log(error);
      });
  }
}
