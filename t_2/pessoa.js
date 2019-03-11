"use strict";
class Pessoa {
    constructor(nome, altura, dataNasc) {
        this._nome = nome;
        this._altura = altura;
        this._dataNasc = dataNasc;
    }
    get nome() {
        return this._nome;
    }
    get dataNasc() {
        return `${this._dataNasc.getFullYear()}-${this._dataNasc.getMonth()}-${this._dataNasc.getDay()}`;
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
class Main {
    constructor(nome, altura, dataNasc) {
        this.pessoa = new Pessoa(nome, altura, new Date(dataNasc));
    }
}
let m = new Main("Clark", "1,90", "1988-3-12");
console.log("" + m.pessoa);
