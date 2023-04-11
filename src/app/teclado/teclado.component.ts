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

  public novaExpressao(valor : any, sinal: boolean): void {

    let ultimoCaractere: any = (this.textoConta).split("")[(this.textoConta).length-1];
    
    if(valor == 'C'){
      this.textoConta = '';
    }
    else if(valor == '='){ 
      this.resultado = eval(this.textoConta);
      this.textoConta = this.resultado.toString();
    }
    else if(this.verificarElementoSinalOuValorZero(sinal, valor, ultimoCaractere)){
        this.textoConta = this.textoConta+valor;
    }
    else{
      this.textoConta = this.textoConta+valor;
    }
  }
  private temElemento(operacao: BotaoCalculadora, ultimoCaractere: string): boolean {
    return operacao.valor === ultimoCaractere;
  }

  private verificarElementoSinalOuValorZero(sinal: boolean, valor: any, ultimoCaractere: string) : boolean {
    return (sinal == true || valor == 0) && (this.textoConta !== '' && !this.operacoes.some((operacao) => this.temElemento(operacao, ultimoCaractere)));
  }

}
