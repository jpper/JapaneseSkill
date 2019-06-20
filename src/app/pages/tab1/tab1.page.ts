import { Component, OnInit } from '@angular/core';
import {Deck, DeckService} from '../../services/deck.service';
import {Observable} from 'rxjs';
import { Facebook } from '@ionic-native/facebook/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  private decks: Observable<Deck[]>;
  user: any;
  userReady = false;


  constructor(
    private deckService: DeckService,
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

  ionViewWillEnter() {
    this.decks = this.deckService.getDecks();
  }

  doRefresh(event) {
      console.log('Begin async operation');

      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
}
