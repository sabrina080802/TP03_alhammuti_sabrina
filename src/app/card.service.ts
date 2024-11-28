import { Injectable } from '@angular/core';
import { Card } from './card.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private cardsSubject = new BehaviorSubject<Card[]>([]);
  cards$ = this.cardsSubject.asObservable();

  constructor() {
    const initialCards: Card[] = [
      {
        id: 1,
        name: 'Carte 1',
        cardNumber: '1234567812345678',
        ccv: '123',
        expiryMonth: '12',
        expiryYear: '2025',
      },
      {
        id: 2,
        name: 'Carte 2',
        cardNumber: '2345678923456789',
        ccv: '456',
        expiryMonth: '11',
        expiryYear: '2024',
      },
    ];
    this.cardsSubject.next(initialCards);
  }

  addCard(card: Card): void {
    const currentCards = this.cardsSubject.value;
    this.cardsSubject.next([...currentCards, card]);
  }

  deleteCard(card: Card): void {
    const currentCards = this.cardsSubject.value;
    const updatedCards = currentCards.filter(
      (c) => c.cardNumber !== card.cardNumber
    );
    this.cardsSubject.next(updatedCards);
  }

  updateCard(updatedCard: Card): void {
    const currentCards = this.cardsSubject.value;
    const index = currentCards.findIndex(
      (c) => c.cardNumber === updatedCard.cardNumber
    );
    if (index !== -1) {
      currentCards[index] = updatedCard;
      this.cardsSubject.next([...currentCards]);
    }
  }

  getCards(): Card[] {
    return this.cardsSubject.value;
  }
}
