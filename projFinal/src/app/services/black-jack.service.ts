import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlackJackService {

  constructor(private http: HttpClient) { }

  linkdrawCard = `https://deckofcardsapi.com/api/deck/zmh8fvkb6abq/draw/?count=1`;
  shuffleDeck = "https://deckofcardsapi.com/api/deck/zmh8fvkb6abq/shuffle/";

  drawCard() {
    return this.http.get(this.linkdrawCard);
  }

  shuffle() {
    return this.http.get(this.shuffleDeck);
  }

}
