import {Component, OnInit} from '@angular/core';
import {Deck, DeckService} from '../../services/deck.service';
import {FormBuilder, Validators} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-createdeck',
  templateUrl: './createdeck.page.html',
  styleUrls: ['./createdeck.page.scss'],
})
export class CreatedeckPage implements OnInit {
  private deck: Deck = {
    title: '',
    level: ''
  }
  createDeckForm: any;
  private submitAttempt: boolean;
  title: any;
  level: any;

  constructor(
    private deckService: DeckService,
    public formBuilder: FormBuilder,
    public  alertController: AlertController,
    private router: Router

  ) {
    this.createDeckForm = formBuilder.group({
      title: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      level: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  createDeckAttempt() {
    this.submitAttempt = true;
    if (!this.createDeckForm.valid) {
      console.log('Failed to validate the deck');
      this.presentAlert();
    } else {
      this.deckService.addDeck(this.deck);
      this.router.navigateByUrl('/menu/first'); // Redirect
    }

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Could not validate',
      subHeader: 'Failed to validate the deck',
      message: 'デッキを検証できませんでした.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
