export class BlackJack {
    
    imagem;
    valor;
    naipe;
    code;

    constructor(objectRecebido: any){
        this.imagem           = objectRecebido.image;
        this.valor   = objectRecebido.value;
        this.naipe         = objectRecebido.suit;
        this.code      = objectRecebido.code;
      }
}
