import { Component } from '@angular/core';
import { CalcActionsComponent } from "../calc-actions/calc-actions.component";

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado : number = 0;

  constructor() { }

  setResult(res: number): void{
    this.resultado = res;
  }

  setNumero1(event: any): void{
    this.numero1 = +event.target.value;
  }

  setNumero2(event: any): void{
    this.numero2 = +event.target.value;
  }
  
  limpiar(): void{
    this.resultado = 0;
    this.numero1 = 0;
    this.numero2 = 0;
  }
}
