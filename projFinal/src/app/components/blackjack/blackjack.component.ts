import { Component, OnInit } from '@angular/core';
import { BlackJackService } from 'src/app/services/black-jack.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {

  constructor(private service: BlackJackService) { }

  ngOnInit(): void {
    this.shuffle();
  }

  bet: number = 0;

  shuffle() {
    this.service.shuffle().subscribe((x) => {
      if (x['success'] == true) {
        console.log(x);
      } else {
        alert("ERRO shuffle")
      }
    }
    );
  }

  cards;
  drawCard() {
    this.service.drawCard().subscribe((x) => {
      if (x['success'] == true) {
        this.cards = (x['cards']);
        console.log(this.cards);
      } else {
        alert("ERRO RECEBER CARTA");
      }
    }
    );
  }

  iniciarJogo() {
    if (this.bet != 0) {
      this.drawCard();
    }
  }

  placeBet(value: number) {
    return this.bet += value;
  }

  clearBet(){
    return this.bet = 0;
  }
}
