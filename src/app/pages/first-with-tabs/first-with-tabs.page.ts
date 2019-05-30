import { Component, OnInit } from '@angular/core';
import {Deck, DeckService} from '../../services/deck.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-first-with-tabs',
  templateUrl: './first-with-tabs.page.html',
  styleUrls: ['./first-with-tabs.page.scss'],
})
export class FirstWithTabsPage implements OnInit {
  private decks: Observable<Deck[]>;

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.decks = this.deckService.getDecks();
  }

}
