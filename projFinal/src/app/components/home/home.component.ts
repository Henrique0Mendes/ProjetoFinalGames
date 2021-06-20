import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  // vars
  router: Router;

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
