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
    this.drawCard();
  }

  cards;

  drawCard(){  
    this.service.drawCard().subscribe((x) => {
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
