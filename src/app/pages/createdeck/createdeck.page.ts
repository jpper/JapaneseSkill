import {Component, OnInit} from '@angular/core';
import {Deck, DeckService} from '../../services/deck.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-createdeck',
  templateUrl: './createdeck.page.html',
  styleUrls: ['./createdeck.page.scss'],
})
export class CreatedeckPage implements OnInit {
  deck: Deck = null;
  slideOneForm: any;

  constructor(
    deckService: DeckService,
    public formBuilder: FormBuilder
  ) {
    this.slideOneForm = formBuilder.group({
      firstName: [''],
      lastName: [''],
      age: ['']
    });
  }

  ngOnInit() {
  }

  createDeck() {
    console.log('Creating deck');
  }
}
