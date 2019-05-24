import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';

// tslint:disable-next-line:prefer-const
const firebaseConfig = {
    apiKey: 'AIzaSyA-EZWW5j1GoQagmT20lX-h5zsQp-vv-2k',
    authDomain: 'japanese-skill.firebaseapp.com',
    databaseURL: 'https://japanese-skill.firebaseio.com',
    projectId: 'japanese-skill',
    storageBucket: 'japanese-skill.appspot.com',
    messagingSenderId: '344264279394',
    appId: '1:344264279394:web:946883dd5152f4d9'
};

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        Facebook,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        { provide: FirestoreSettingsToken, useValue: {} }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
