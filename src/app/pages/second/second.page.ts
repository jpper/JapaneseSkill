import { Component, OnInit } from '@angular/core';
import { DeckService, Deck } from 'src/app/services/deck.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  private decks: Observable<Deck[]>;

  constructor(
    private deckService: DeckService,
  ) { }

  ngOnInit() {
    this.decks = this.deckService.getDecks();
  }

}
