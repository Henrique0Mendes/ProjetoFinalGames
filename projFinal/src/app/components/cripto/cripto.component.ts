import { Component, OnInit } from '@angular/core';
import { CriptoService } from 'src/app/services/cripto.service';
import { WalletService } from 'src/app/services/wallet.service';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
  }
  wallet: number;
  incomings: number = 0;
  coinPrice: number = 0;
  change: number = 0;

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
