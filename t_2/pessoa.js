"use strict";
class Pessoa {
    constructor(nome, dataNasc, altura) {
        this._nome = nome;
        this._altura = altura;
        this._dataNasc = new Date(dataNasc);
    }
    get nome() {
        return this._nome;
    }
    get dataNasc() {
        return "" + this._dataNasc;
    }
    get altura() {
        return this._altura;
    }
    set nome(value) {
        this._nome = value;
    }
    set dataNasc(value) {
        this._dataNasc = new Date(value);
    }
    set altura(value) {
        this._altura = value;
    }
    calcIdade() {
        let today = new Date();
        return `${today.getFullYear() - this._dataNasc.getFullYear()}`;
    }
    toString() {
        return `Nome: ${this._nome} \nData de nascimento: ${this.dataNasc} \nIdade: ${this.calcIdade()} anos \nAltura: ${this._altura}`;
    }
}
let p = new Pessoa("Zé", "1997-2-10", "1.80");
//console.log(p.calcIdade());
console.log("" + p);
