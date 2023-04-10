import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoFuncaoComponent } from './botao-funcao.component';

describe('BotaoFuncaoComponent', () => {
  let component: BotaoFuncaoComponent;
  let fixture: ComponentFixture<BotaoFuncaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoFuncaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
