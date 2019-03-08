"use strict";
class Elevador {
    constructor(capacidade, andarPredio) {
        this._capacidade = capacidade;
        this._andaresPredio = andarPredio;
        this._lotacao = 0;
        this._andarAtual = 0;
    }
    entrar(qtd) {
        console.log(this._lotacao);
        if ((this._lotacao + qtd) > this._capacidade) {
            //console.log("capacidade maxima");
            return;
        }
        this._lotacao += qtd;
    }
    sair(qtd) {
        console.log(this._lotacao);
        if (this._lotacao == 0) {
            return;
        }
        if ((this._lotacao - qtd) < 0)
            return;
        this._lotacao -= qtd;
    }
    subir(andar) {
        if (this._andarAtual == this._andaresPredio) {
            console.log("Andar máximo");
            return;
        }
        if ((this._andarAtual + andar) > this._andaresPredio) {
            console.log("Andar máximo");
            this._andarAtual = this._andaresPredio;
            console.log(this._andarAtual);
            return;
        }
        this._andarAtual++;
        console.log(this._andarAtual);
    }
    descer(andar) {
        if (this._andarAtual == 0) {
            console.log("Andar terreo");
            return;
        }
        if ((this._andarAtual - andar) <= 0) {
            console.log("Andar terreo");
            this._andarAtual = 0;
            return;
        }
        this._andarAtual--;
    }
}
let el = new Elevador(10, 25);
el.entrar(2);
el.entrar(4);
el.entrar(5);
el.entrar(2);
el.entrar(3);
/* el.sair(2);
el.sair(2);
el.sair(2);
el.sair(2);
el.sair(2);
el.sair(2); */
for (let i = 0; i < 25; i++) {
    el.subir(i);
}
for (let i = 0; i < 25; i++) {
    el.descer(i);
}
