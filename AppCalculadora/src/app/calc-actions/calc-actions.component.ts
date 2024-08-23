import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {
   @Input () numero1: number = 0;
   @Input () numero2: number = 0;
   @Output() result = new EventEmitter<number>();
   @Output() limpiador = new EventEmitter<void>();

   constructor() { }

  sumar()
  {
    this.result.emit(this.numero1 + this.numero2);
  }
  restar()
  {
    this.result.emit(this.numero1 - this.numero2);
  }
  potenciar()
  {
    this.result.emit(Math.pow(this.numero1, this.numero2));
  }
  multiplicar()
  {
    this.result.emit(this.numero1 * this.numero2);
  }
  dividir()
  {
    this.result.emit(this.numero1 / this.numero2);
  }
  limpiar()
  {
    this.limpiador.emit();
  }

}
