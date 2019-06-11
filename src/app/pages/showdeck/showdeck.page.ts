import { Component, OnInit } from '@angular/core';
import {Deck, DeckService} from '../../services/deck.service';
import {ActivatedRoute} from '@angular/router';

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
}
