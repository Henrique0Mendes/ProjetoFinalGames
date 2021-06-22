import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-cripto',
  templateUrl: './cripto.component.html',
  styleUrls: ['./cripto.component.css']
})
export class CriptoComponent implements OnInit {

  constructor(private walletService: WalletService) { }

  ngOnInit(): void {
    this.onLoad();
  }
  wallet: number;
  incomings: number = 0;
  coinPrice: number = 0;
  change: number = 0;

  onLoad(){
    this.walletService.wallet = JSON.parse(localStorage.wallet);
    this.wallet = this.walletService.wallet;
  }

  scroll(elem: HTMLElement) {
    elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
}
