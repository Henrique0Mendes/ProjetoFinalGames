import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CriptoService {

  bit:any= {
    price:"",
    change:""
  };
  eth:any= {
    price:"",
    change:""
  };
  bnb:any= {
    price:"",
    change:""
  };
  xrp:any= {
    price:"",
    change:""
  };
  doge:any={
    price:"",
    change:""
  }; 
  dot:any= {
    price:"",
    change:""
  };
  ltc:any= {
    price:"",
    change:""
  };
  mkr:any= {
    price:"",
    change:""
  };

  constructor(private http: HttpClient) { 
  }


  cripto(linkCripto) {
    return this.http.get(linkCripto);
  }


}
