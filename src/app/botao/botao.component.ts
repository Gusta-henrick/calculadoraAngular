import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {

  @Input()
  public numero!: number|string;    
  
  @Output()
  public mudouValor = new EventEmitter();

  montarExpressao(){
    console.log(this.numero);
    this.mudouValor.emit(this.numero);
  }
}
