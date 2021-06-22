import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlackJackService {

  constructor(private http: HttpClient) { }

  linkbrandNewDecks = "https://deckofcardsapi.com/api/deck/new/";

  brandNewDeck() {
    return this.http.get(this.linkbrandNewDecks);
  }

  drawCard(link) {
    return this.http.get(link);
  }

}
