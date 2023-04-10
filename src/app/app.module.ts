import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TecladoComponent } from './teclado/teclado.component';
import { BotaoComponent } from './botao/botao.component';
import {MatButtonModule} from '@angular/material/button';
import { BotaoModule } from './botao/botao.module';
import { BotaoFuncaoComponent } from './botao-funcao/botao-funcao.component';




@NgModule({
  declarations: [
    AppComponent,
    TecladoComponent,
    BotaoComponent,
    BotaoFuncaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    BotaoModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
