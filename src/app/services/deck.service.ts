import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, DocumentReference} from '@angular/fire/firestore';
import {map, take} from 'rxjs/operators';

export interface Deck {
    id?: string;
    title: string;
    level: string;
}

@Injectable({
    providedIn: 'root'
})
export class DeckService {

    private decks: Observable<Deck[]>;
    private deckCollection: AngularFirestoreCollection<Deck>;

    constructor(private afs: AngularFirestore) {
        this.deckCollection = this.afs.collection<Deck>('decks');
        this.decks = this.deckCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data};
                });
            })
        );
    }

    getDecks(): Observable<Deck[]> {
        return this.decks;
    }

    getDeck(id: string): Observable<Deck> {
        return this.deckCollection.doc<Deck>(id).valueChanges().pipe(
            take(1),
            map(deck => {
                deck.id = id;
                return deck;
            })
        );
    }

    addDeck(deck: Deck): Promise<DocumentReference> {
        return this.deckCollection.add(deck);
    }

    updateDeck(deck: Deck): Promise<void> {
        return this.deckCollection.doc(deck.id).update({
            title: deck.title,
            level: deck.level,
        });
    }

    deleteDeck(id: string): Promise<void> {
        return this.deckCollection.doc(id).delete();
    }
}
