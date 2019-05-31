import { Component, OnInit } from '@angular/core';
import {Deck, DeckService} from '../../services/deck.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  private decks: Observable<Deck[]>;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
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
