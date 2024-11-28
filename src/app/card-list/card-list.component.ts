import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { Card } from '../card.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit, OnDestroy {
  cards: Card[] = [];
  private cardSubscription: Subscription | null = null;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardSubscription = this.cardService.cards$.subscribe((cards) => {
      this.cards = cards;
    });
  }

  ngOnDestroy(): void {
    if (this.cardSubscription) {
      this.cardSubscription.unsubscribe();
    }
  }

  onDelete(card: Card) {
    this.cardService.deleteCard(card);
  }
}
