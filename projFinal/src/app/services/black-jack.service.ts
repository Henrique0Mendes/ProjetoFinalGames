import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


class Carta{
  imagem: string = "";
  valor: string ="";

  constructor(img, val){
    this.imagem = img;
    this.valor = val;
  }
};

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

  cartas: Array<Carta> = [
    new Carta("",""),
    new Carta("",""),
    new Carta("",""),
    new Carta("",""),
    new Carta("",""),
    new Carta("",""),
    new Carta("",""),
    new Carta("",""),
    new Carta("",""),
    new Carta("","")
  ];
  

}
