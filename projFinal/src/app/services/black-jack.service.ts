import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BlackJackService {

  constructor(private http: HttpClient) { }
  
  linkReceberDecks = "";

receberCartas() {
  return this.http.get(this.linkReceberDecks);
}

}
