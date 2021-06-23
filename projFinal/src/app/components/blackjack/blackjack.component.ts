import { Component, OnInit } from '@angular/core';
import { BlackJackService } from 'src/app/services/black-jack.service';
import { HttpClient } from '@angular/common/http';
import { WalletService } from 'src/app/services/wallet.service';
import { DefaultUrlSerializer } from '@angular/router';

@Component({
  selector: 'app-blackjack',
  templateUrl: './blackjack.component.html',
  styleUrls: ['./blackjack.component.css']
})
export class BlackjackComponent implements OnInit {

  constructor(private service: BlackJackService, private walletService: WalletService) { }

  ngOnInit(): void {
    this.shuffle();
    this.onLoad();
  }

  wallet: number;
  bet: number = 0;
  playing: boolean = false;
  player: number = 0;
  dealer: number = 0;
  pSum: number = 0;
  dSum: number = 0;
  winner: boolean;

  c3Val: number = 0;
  c4Val: number = 0;
  c5Val: number = 0;
  c8Val: number = 0;
  c9Val: number = 0;
  c10Val:number = 0;


  shuffle() {
    this.service.shuffle().subscribe((x) => {
      if (x['success'] == true) {
        console.log("baralhado");
      } else {
        alert("ERRO shuffle")
      }
    }
    );
  }
  
 
  updateStorage() {
    localStorage.setItem("wallet", JSON.stringify(this.walletService.wallet));
  }

  hideCards(){
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    let c3 = document.getElementById("c3");
    let c4 = document.getElementById("c4");
    let c5 = document.getElementById("c5");
    let c6 = document.getElementById("c6");
    let c7 = document.getElementById("c7");
    let c8 = document.getElementById("c8");
    let c9 = document.getElementById("c9");
    let c10 = document.getElementById("c10");
    c1.style.display = "none !important";
    c2.style.display = "none !important";
    c3.style.display = "none !important";
    c4.style.display = "none !important";
    c5.style.display = "none !important";
    c6.style.display = "none !important";
    c7.style.display = "none !important";
    c8.style.display = "none !important";
    c9.style.display = "none !important";
    c10.style.display = "none !important";  
  }

  endGame(){
    

    this.playing = false;
    this.shuffle();
    this.player = 0;
    this.dealer = 0;
    this.pSum   = 0;
    this.dSum   = 0;
    this.c3Val  = 0;
    this.c4Val  = 0;
    this.c5Val  = 0;
    this.c8Val  = 0;
    this.c9Val  = 0;
    this.c10Val = 0;
    this.winner ? this.walletService.wallet += this.bet * 2 : this.wallet = this.wallet;
    this.wallet = Math.round((this.walletService.wallet + Number.EPSILON) * 100) / 100;
    this.updateStorage();
    this.winner = undefined;
    this.bet = 0;

    this.hideCards();
  }

  check(value){
    switch (value) {
    case "QUEEN":  
        return 10;
        break; 
    case "ACE":  
        return 11;
        break; 
    case "JACK": 
        return 10;
        break; 
    case "KING": 
        return 10;
        break; 
    case "2": 
        return 2;
        break;
    case "3": 
        return 3;
        break; 
    case "4": 
        return 4;
        break; 
    case "5": 
        return 5;
        break; 
    case "6": 
        return 6;
        break; 
    case "7": 
        return 7;
        break; 
    case "8": 
        return 8;
        break; 
    case "9": 
        return 9;
        break; 
    case "10": 
        return 10;
        break; 
    default:
        break;
    }
  }

  iniciarJogo(card1: HTMLImageElement, card2: HTMLImageElement, card3: HTMLImageElement, card4: HTMLImageElement, card5: HTMLImageElement, card6: HTMLImageElement, card7: HTMLImageElement, card8: HTMLImageElement, card9: HTMLImageElement, card10: HTMLImageElement) {
    if(!this.playing){
      if (this.bet != 0 && this.bet < this.wallet) {
        this.wallet -= this.bet;
        this.wallet = Math.round((this.wallet + Number.EPSILON) * 100) / 100;
        this.playing = true;

        for (let i = 1; i <= 12; i++) {
            this.service.drawCard().subscribe((x) => {
              if (x['success'] == true) {
                this.service.cartas[0].imagem = x['cards'][0].image;
                this.service.cartas[0].valor = x['cards'][0].value;
                this.service.cartas[1].imagem = x['cards'][0].image;
                this.service.cartas[1].valor = x['cards'][0].value;
                this.service.cartas[2].imagem = x['cards'][0].image;
                this.service.cartas[2].valor = x['cards'][0].value;
                this.service.cartas[3].imagem = x['cards'][0].image;
                this.service.cartas[3].valor = x['cards'][0].value;
                this.service.cartas[4].imagem = x['cards'][0].image;
                this.service.cartas[4].valor = x['cards'][0].value;
                this.service.cartas[5].imagem = x['cards'][0].image;
                this.service.cartas[5].valor = x['cards'][0].value;
                this.service.cartas[6].imagem = x['cards'][0].image;
                this.service.cartas[6].valor = x['cards'][0].value;
                this.service.cartas[7].imagem = x['cards'][0].image;
                this.service.cartas[7].valor = x['cards'][0].value;
                this.service.cartas[8].imagem = x['cards'][0].image;
                this.service.cartas[8].valor = x['cards'][0].value;
                this.service.cartas[9].imagem = x['cards'][0].image;
                this.service.cartas[9].valor = x['cards'][0].value;

                switch (i) {
                  case 1:
                    card1.setAttribute("src", this.service.cartas[0].imagem);
                    card1.style.display = "block";

                    this.pSum += this.check(this.service.cartas[0].valor);
                    break;
                  case 2:
                    card2.setAttribute("src", this.service.cartas[1].imagem);

                    card2.style.display = "block";
                    this.pSum += this.check(this.service.cartas[1].valor);
                    
                    break;
                  case 3:
                    card3.setAttribute("src", this.service.cartas[2].imagem);
                    
                    this.c3Val = this.check(this.service.cartas[2].valor);
                    break;
                  case 4:
                    card4.setAttribute("src", this.service.cartas[3].imagem);
                    
                    this.c4Val = this.check(this.service.cartas[3].valor);
                    break;
                  case 5:
                    card5.setAttribute("src", this.service.cartas[4].imagem);
      
                    this.c5Val = this.check(this.service.cartas[4].valor);

                    break;
                  case 6:
                    card6.setAttribute("src", this.service.cartas[5].imagem);
                    card6.style.display = "block";

                    this.dSum += this.check(this.service.cartas[5].valor);
      
                    break;
                  case 7:
                    card7.setAttribute("src", this.service.cartas[6].imagem);
                    this.dSum += this.check(this.service.cartas[6].valor)
                    card7.style.display = "block";
                    break;
                  case 8:
                    card8.setAttribute("src", this.service.cartas[7].imagem);
      
                    this.c8Val = this.check(this.service.cartas[7].valor);

                    break;
                  case 9:
                    card9.setAttribute("src", this.service.cartas[8].imagem);
      
                    this.c9Val = this.check(this.service.cartas[8].valor);
                    break;
                  case 10:
                    card10.setAttribute("src", this.service.cartas[9].imagem);

                    this.c10Val = this.check(this.service.cartas[9].valor);

                    break;
                  default:
                }
              } else {
                alert("ERRO RECEBER CARTA");
              }
          });
        }
        
        
        if (this.pSum == 21 && this.dSum != 21){
          this.winner = true;
          this.endGame();
          
        } else if(this.dSum == 21 && this.pSum == 21){
          this.winner = false;
          this.endGame();
        }
      
      }
    }
  }

  checkVal(){
  if (this.pSum > 21){
    this.winner = false;
    this.endGame();
  }else if (this.dSum > 21){
      this.winner = true;
      this.endGame();
  } else if (this.player == 3 && this.dealer == 3){
    if (this.pSum > this.dSum){
      this.winner = true;
      this.endGame();
    } else{
      this.winner = false;
      this.endGame();
    }
  }


  }

  drawPCard(card3: HTMLImageElement, card4: HTMLImageElement, card5: HTMLImageElement){
    this.player += 1;

    switch (this.player) {
      case 1:
        card3.classList.toggle("hide");
        card3.style.display = "block !important";

        this.pSum += this.c3Val;

        this.checkVal();
        break;
      case 2:
        card4.classList.toggle("hide");
        card4.style.display = "block !important";
        this.pSum += this.c4Val;

        this.checkVal();
        break;
      case 3:
        card5.classList.toggle("hide");
        card5.style.display = "block !important";
        
        this.pSum += this.c5Val;

        this.checkVal();
        break;
      default:
    }

    console.log(this.pSum);
  }

  drawDCard(card8: HTMLImageElement, card9: HTMLImageElement, card10: HTMLImageElement){
    for(let i = 0; i < 3; i++){
      this.dealer += 1;

      switch (this.dealer) {
        case 1:
          card8.classList.toggle("hide");
          card8.style.display = "block !important";
          this.dSum += this.c8Val;
          
          this.checkVal();
          break;
        case 2:
          card9.classList.toggle("hide");
          card9.style.display = "block !important";
          this.dSum += this.c9Val;
          
          this.checkVal();
          break;
        case 3:
          card10.classList.toggle("hide");
          card10.style.display = "block !important";
          this.dSum += this.c10Val;
          
          this.checkVal();
          break;
        default:
      }
      console.log(this.dSum);  
    }
  }

  placeBet(value: number) {
    return this.bet += value;
  }

  clearBet(){
    return this.bet = 0;
  }
  
  onLoad() {
    this.walletService.wallet = JSON.parse(localStorage.wallet);
    this.wallet = Math.round((this.walletService.wallet + Number.EPSILON) * 100) / 100;
  }
}
