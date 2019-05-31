import { Component, OnInit } from '@angular/core';
import {Deck, DeckService} from '../../services/deck.service';

@Component({
  selector: 'app-createdeck',
  templateUrl: './createdeck.page.html',
  styleUrls: ['./createdeck.page.scss'],
})
export class CreatedeckPage implements OnInit {
  deck: Deck = null;

  constructor(deckService: DeckService) { }

  ngOnInit() {
  }

  createDeck() {
    console.log('Creating deck');
  }
}
