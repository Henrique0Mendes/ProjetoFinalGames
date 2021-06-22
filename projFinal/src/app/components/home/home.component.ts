import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private walletService: WalletService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.verifyStorage();
  }

  // vars
  router: Router;

  // verifica se ja existe dados no local storage ? passa os dados para o serviço : cria os dados no local storage
  verifyStorage() {
    if (localStorage.getItem("wallet") === null) {
      localStorage.setItem("wallet", JSON.stringify(this.walletService.wallet + 100000));
      this.walletService.wallet = JSON.parse(localStorage.wallet);
    } else {
      this.walletService.wallet = JSON.parse(localStorage.wallet);
      console.log("Dom fully loaded...");
      console.log("dinheiro no serviço: ", this.walletService.wallet);
    }
  }

  // da update a carteira no local storage
  updateStorage() {
    localStorage.setItem("wallet", JSON.stringify(this.walletService.wallet));
  }

  // does an animation and switches components
  growUp(element: HTMLElement, value: number) {
    element.classList.toggle("growUp");

    setTimeout(() => {
      element.classList.toggle("growUp");

      setTimeout(() => {
        switch (value) {
          case 1:
            this.router.navigate(['/blackjack']);
            break;

          case 2:
            this.router.navigate(['/cripto']);
            break;

          default:
            break;
        }
      }, 350);
    }, 400);
  }

  // returns the choosen path
  blackJChosen(element: HTMLElement) {
    return this.growUp(element, 1);
  }

  // returns the choosen path
  criptoChosen(element: HTMLElement) {
    return this.growUp(element, 2);
  }
}
