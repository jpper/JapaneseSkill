import { Component, OnInit } from '@angular/core';
import {Deck, DeckService} from '../../services/deck.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-showdeck',
  templateUrl: './showdeck.page.html',
  styleUrls: ['./showdeck.page.scss'],
})
export class ShowdeckPage implements OnInit {
  deck: Deck = null;
  private id: string;

  constructor(
      private activatedRoute: ActivatedRoute,
      private deckService: DeckService,
      private router: Router,
      private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ionViewWillEnter() {
    if (this.id) {
      this.deckService.getDeck(this.id).subscribe(deck => {
        this.deck = deck;
      });
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Deleting ' + this.deck.title.toString(),
      message: 'Are you sure you want to delete this deck?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.deleteDeck();
            // Redirect to the home page
            this.router.navigateByUrl('/menu/first');
          }
        }
      ]
    });

    await alert.present();
  }

  deleteDeck() {
    this.deckService.deleteDeck(this.deck.id);
  }

}
