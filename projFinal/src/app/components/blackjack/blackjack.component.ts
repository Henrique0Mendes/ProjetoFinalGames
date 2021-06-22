import { Component, OnInit } from '@angular/core';
import { BlackJack } from 'src/app/classes/black-jack';
import { BlackJackService } from 'src/app/services/black-jack.service';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {

  constructor(private service: BlackJackService) { }

  ngOnInit(): void {
  }


  recivedata ?: any;
  arrayCartas : Array<BlackJack> =[];

  receberCartas() {
    this.service.receberCartas().subscribe( 
      (data) => {
          this.recivedata = data;
          console.log(this.recivedata['data'].cards);
          if(this.recivedata['code'] == 200){
            this.arrayCartas = this.recivedata['data'].cards.map(( x: any) => new BlackJack(x) )

          }else{
    
          }

    });
  }


}
