import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao-funcao',
  templateUrl: './botao-funcao.component.html',
  styleUrls: ['./botao-funcao.component.scss']
})
export class BotaoFuncaoComponent {

  @Input()
  public textoSinal!: string; 

  @Input()
  public sinal!: string; 
  
  @Output()
  public adicionarSinal = new EventEmitter();

  montarExpressao(){
    console.log(this.sinal);
    this.adicionarSinal.emit(this.sinal)
  }
}
