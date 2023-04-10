import { Component } from '@angular/core';
import { BotaoCalculadora } from '../models/BotaoCalculadora';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.scss']
})

export class TecladoComponent{
  public textoConta: string = '';
  public resultado: number = 0;
  public numbers: Array<string> = ['1','2','3','4','5','6','7','8','9','C','0', '='];
  public operacoes: Array<BotaoCalculadora> = [
    {textoBotao:'+',
    valor: '+',
    },
    {textoBotao:'-',
    valor: '-',
    },
    {textoBotao:'x',
    valor: '*',
    },
    {textoBotao:'/',
    valor: '/',
    }
  ];
  
  public teste: BotaoCalculadora = new BotaoCalculadora('+','+');

  novaExpressao(valor : any, sinal: boolean){

    let ultimoCaractere: any = (this.textoConta).split("")[(this.textoConta).length-1];
    
    if(valor == 'C'){
      this.textoConta = '';
    }
    else if(valor == '='){
      this.resultado = eval(this.textoConta);
      this.textoConta = this.resultado.toString();
    }
    else if(sinal == true){

      console.log('ultimo caractere:', ultimoCaractere);

      if(this.textoConta == '' || this.operacoes.some((operacao) => this.temElemento(operacao, ultimoCaractere))){
        console.log('Você não pode inserir um sinal agora');
      }
      else{
        this.textoConta = this.textoConta+valor;
      }
    }

    //tratando 0 esquerda
    else if(valor == '0'){
      console.log('ultimo caractere:', ultimoCaractere);


      if(this.textoConta == '' || this.operacoes.some((operacao) => this.temElemento(operacao, ultimoCaractere))){
        console.log('Você não pode inserir um 0 à esquerda');
      }
      else{
        this.textoConta = this.textoConta+valor;
      }
    }
    //tratando 0 esquerda
    else{
      this.textoConta = this.textoConta+valor;
    }
  }
  private temElemento(operacao: BotaoCalculadora, ultimoCaractere: string){
    return operacao.valor === ultimoCaractere;
  }

}
