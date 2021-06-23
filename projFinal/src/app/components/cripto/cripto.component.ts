import { Component, OnInit } from '@angular/core';
import { CriptoService } from 'src/app/services/cripto.service';
import { WalletService } from 'src/app/services/wallet.service';
import { HttpClient } from '@angular/common/http';
import { Cripto } from 'src/app/classes/cripto';

@Component({
  selector: 'app-cripto',
  templateUrl: './cripto.component.html',
  styleUrls: ['./cripto.component.css']
})

export class CriptoComponent implements OnInit {

  constructor(private walletService: WalletService, private service: CriptoService) { }

  ngOnInit(): void {
    this.onLoad();
    this.requestCripto();

    if (localStorage.getItem("Bitcoin") === null && localStorage.getItem("Etherium") === null && localStorage.getItem("Dogecoin") === null &&
     localStorage.getItem("XRP") === null && localStorage.getItem("Marker") === null && localStorage.getItem("Binance Coin") === null &&
      localStorage.getItem("Polkadot") === null &&  localStorage.getItem("Litecoin") === null){
    } else {
      this.pagar();
      this.deleteStorage();
    }
  }

  wallet: number = this.walletService.wallet;
  incomings: number = 0;


  comprar(nome, valorCripto, valorInvestido){

    valorInvestido = valorInvestido * valorCripto;
    if (valorInvestido<this.walletService.wallet){
      let comprarCripto = new Cripto(nome, valorCripto, valorInvestido);
    
      this.gravarStorage(comprarCripto);
      this.walletService.wallet = this.walletService.wallet - comprarCripto.valorInvestido;
      this.wallet = this.walletService.wallet;
      this.updateStorage();
    }else{
      alert("Dinheiro insuficiente");
    }
  
  }

   gravarStorage(comprarCripto) {
    localStorage.setItem(comprarCripto.nome, JSON.stringify(comprarCripto));
  }

  updateStorage() {
    localStorage.setItem("wallet", JSON.stringify(this.walletService.wallet));
  }

  deleteStorage(){
    localStorage.removeItem("Bitcoin");
    localStorage.removeItem("Dogecoin");
    localStorage.removeItem("XRP");
    localStorage.removeItem("Binance Coin");
    localStorage.removeItem("Maker");
    localStorage.removeItem("Litecoin");
    localStorage.removeItem("Etherium");
    localStorage.removeItem("Polkadot");
  }

  pagar(){
    if (localStorage.getItem("Bitcoin")===null){}else{
      let valor:any = localStorage.getItem("Bitcoin");
      let pagar =  JSON.parse(valor).valorCripto - JSON.parse(valor).valorInvestido;
         if (pagar>0 ){
          this.walletService.wallet = this.walletService.wallet + pagar;
        }
    }
    if (localStorage.getItem("Etherium")===null){}else{
      let valor1:any = localStorage.getItem("Etherium");
      let pagar1 =  JSON.parse(valor1).valorCripto - JSON.parse(valor1).valorInvestido;
        if (pagar1>0 ){
          this.walletService.wallet = this.walletService.wallet + pagar1;
        }
    }
    if (localStorage.getItem("XRH")===null){}else{
      let valor2:any = localStorage.getItem("XHR");
      let pagar2 = JSON.parse(valor2).valorCripto - JSON.parse(valor2).valorInvestido;
        if (pagar2>0 ){
          this.walletService.wallet = this.walletService.wallet + pagar2;
        }
    }
    if (localStorage.getItem("Dogecoin")===null){}else{
      let valor3:any = localStorage.getItem("Dogecoin");
      let pagar3 =  JSON.parse(valor3).valorCripto - JSON.parse(valor3).valorInvestido;
        if (pagar3>0 ){
          this.walletService.wallet = this.walletService.wallet + pagar3;
        }
    }
    if (localStorage.getItem("Dogecoin")===null){}else{
      let valor4:any = localStorage.getItem("Litecoin");
      let pagar4 =  JSON.parse(valor4).valorCripto - JSON.parse(valor4).valorInvestido;
        if (pagar4>0 ){
          this.walletService.wallet = this.walletService.wallet + pagar4;
        }
      }
    if (localStorage.getItem("Dogecoin")===null){}else{
      let valor5:any = localStorage.getItem("Marker");
      let pagar5 = JSON.parse(valor5).valorCripto - JSON.parse(valor5).valorInvestido;
        if (pagar5 > 0 ){
          this.walletService.wallet = this.walletService.wallet + pagar5;
        }
    }
    if (localStorage.getItem("Dogecoin")===null){}else{
      let valor6:any = localStorage.getItem("Binance Coin");
      let pagar6 = JSON.parse(valor6).valorCripto - JSON.parse(valor6).valorInvestido;
        if (pagar6 > 0 ){
          this.walletService.wallet = this.walletService.wallet + pagar6;
        }
    }
    if (localStorage.getItem("Dogecoin")===null){}else{
      let valor7:any = localStorage.getItem("Polkadot");
      let pagar7 =  JSON.parse(valor7).valorCripto - JSON.parse(valor7).valorInvestido;
        if (pagar7 > 0 ){
            this.walletService.wallet = this.walletService.wallet + pagar7;
        } 
    }
  }

  onLoad() {
    this.walletService.wallet = JSON.parse(localStorage.wallet);
    this.wallet = this.walletService.wallet;
  }

  scroll(element): void {
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  coinPriceBTC;
  coinPriceETH;
  coinPriceBNB;
  coinPriceXRP;
  coinPriceDOGE;
  coinPriceDOT;
  coinPriceLTC;
  coinPriceMKR;

  changeBTC;
  changeETH;
  changeBNB;
  changeXRP;
  changeDOGE;
  changeDOT;
  changeLTC;
  changeMKR;



  requestCripto() {
    let linkCripto = "";
    for (let i = 1; i <= 8; i++) {
      switch (i) {
        case 1:
          linkCripto = "https://api.cryptonator.com/api/ticker/btc-eur";
          break;
        case 2:
          linkCripto = "https://api.cryptonator.com/api/ticker/eth-eur";
          break;
        case 3:
          linkCripto = "https://api.cryptonator.com/api/ticker/bnb-eur";
          break;
        case 4:
          linkCripto = "https://api.cryptonator.com/api/ticker/xrp-eur";
          break;
        case 5:
          linkCripto = "https://api.cryptonator.com/api/ticker/doge-eur";
          break;
        case 6:
          linkCripto = "https://api.cryptonator.com/api/ticker/dot-eur";
          break;
        case 7:
          linkCripto = "https://api.cryptonator.com/api/ticker/ltc-eur";
          break;
        case 8:
          linkCripto = "https://api.cryptonator.com/api/ticker/mkr-eur";
          break;
        default:
          console.log("erro");
          break;
      }

      this.service.cripto(linkCripto).subscribe((x) => {

        if (x['success'] == true) {
          switch (x['ticker'].base) {
            case 'BTC':
              this.service.bit.price = x['ticker'].price;
              this.service.bit.change = x['ticker'].change;
              this.coinPriceBTC = this.service.bit.price;
              this.changeBTC = this.service.bit.change;
              break;
            case 'ETH':
              this.service.eth.price = x['ticker'].price;
              this.service.eth.change = x['ticker'].change;
              this.coinPriceETH = this.service.eth.price;
              this.changeETH = this.service.eth.change;
              break;
            case 'BNB':
              this.service.bnb.price = x['ticker'].price;
              this.service.bnb.change = x['ticker'].change;
              this.coinPriceBNB = this.service.bnb.price;
              this.changeBNB = this.service.bnb.change;
              break;
            case 'XRP':
              this.service.xrp.price = x['ticker'].price;
              this.service.xrp.change = x['ticker'].change;
              this.coinPriceXRP = this.service.xrp.price;
              this.changeXRP = this.service.xrp.change;
              break;
            case 'DOGE':
              this.service.doge.price = x['ticker'].price;
              this.service.doge.change = x['ticker'].change;
              this.coinPriceDOGE = this.service.doge.price;
              this.changeDOGE = this.service.doge.change;
              break;
            case 'DOT':
              this.service.dot.price = x['ticker'].price;
              this.service.dot.change = x['ticker'].change;
              this.coinPriceDOT = this.service.dot.price;
              this.changeDOT = this.service.dot.change;
              break;
            case 'LTC':
              this.service.ltc.price = x['ticker'].price;
              this.service.ltc.change = x['ticker'].change;
              this.coinPriceLTC = this.service.ltc.price;
              this.changeLTC = this.service.ltc.change;
              break;
            case 'MKR':
              this.service.mkr.price = x['ticker'].price;
              this.service.mkr.change = x['ticker'].change;
              this.coinPriceMKR = this.service.mkr.price;
              this.changeMKR = this.service.mkr.change;
              break;
            default:
              console.log("erro");
              break;
          }
        } else {
          alert("Erro cripto");
        }
      });
    }
  }
}
