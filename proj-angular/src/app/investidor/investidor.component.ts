// Emiliano Feitosa - 404406
// Ismael Almeida - 399700;


import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-investidor',
  templateUrl: './investidor.component.html',
  styleUrls: ['./investidor.component.css']
})
export class InvestidorComponent implements OnInit {
  valor: number;
  alerta: string;

  constructor() { 
    this.valor = 0;
    this.alerta = "primary"
  }
  ngOnInit() {
  }

  public iBettMyMoney(dia: number, mes: number, ano: number, investimento: number): number{
    if(investimento > 2000 || investimento < 0){
      investimento = 1520;
    }

    let total: number = 0;

    ehPrimo(dia)? total += (investimento *-1) : total += (investimento * 2);

    ehPar(mes)? mes *= 10: mes *= 100;
    total += mes;

    let idadeRico = investimento * ano;
    idadeRico * 22;

    this.valor = total * idadeRico;
    this.valor < 0? this.alerta = "danger": this.alerta = "primary";
    return this.valor;

  }

}

function ehPrimo(x: number): boolean {

  for (let index: number = 2; index < x; index++) {
    if ((x % index) == 0.0) return false;
  }
  return true;

}

function ehPar(x: number): boolean {
  if (x % 2 == 0) return true;
  return false;
}

/* console.log(ehPrimo(10)); // false
console.log(ehPrimo(2)); // true

console.log(ehPar(10)); //true
console.log(ehPar(15)); //false */

let inv = new InvestidorComponent();

console.log(inv.iBettMyMoney(10, 2, 100, 20));
