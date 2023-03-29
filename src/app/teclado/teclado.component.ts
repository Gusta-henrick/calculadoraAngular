import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.scss']
})
export class TecladoComponent{
  textoConta: string;
  resultado: number;

  constructor(){
    this.textoConta = '';
    this.resultado = 0;
  }

  montarExpressao(valor : any){
    this.textoConta = this.textoConta+valor;
  }

  calcularResultado(){
    this.resultado = eval(this.textoConta);
    this.textoConta = this.resultado.toString();
  }
}
