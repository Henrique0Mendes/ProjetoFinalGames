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
    this.brandNewDecks();
  }

  cards;
  linkdrawCard;

  brandNewDecks(){
      this.service.brandNewDeck().subscribe((x) => {
        if (x['success'] == true ){
          this.linkdrawCard = `https://deckofcardsapi.com/api/deck/${x['deck_id']}/draw/?count=1`;
          console.log(this.linkdrawCard);
          this.drawCard(this.linkdrawCard);
       }else{
          alert("ERRO RECEBER NEW DECK")
        }
      }
      );
  }

  drawCard(link){  
    this.service.drawCard(link).subscribe((x) => {
      console.log(x);
      if (x['success'] == true ){
      this.cards= (x['cards']);
      console.log(this.cards);
      } else{
        alert("ERRO RECEBER CARTA");
      }
    }
    );
}


}
