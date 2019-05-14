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
import {Tab1Page} from './tab1/tab1.page';

const firebaseConfig = {
    apiKey: 'AIzaSyAxMoy7beZdNlo6Zzw-I3vl58M5fF-7v90',
    authDomain: 'japan-info-jobs.firebaseapp.com',
    databaseURL: 'https://japan-info-jobs.firebaseio.com',
    projectId: 'japan-info-jobs',
    storageBucket: 'japan-info-jobs.appspot.com',
    messagingSenderId: '15907976341',
    appId: '1:15907976341:web:77531a2c5f5551aa'
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
