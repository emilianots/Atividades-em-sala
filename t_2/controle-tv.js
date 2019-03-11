"use strict";
/*

class Televisao {
    private _nVolume: number;
    private _nCanal: number;

    constructor() {
        this._nCanal = 0;
        this._nVolume = 0;
    }

    public set nVolume(valor:number){
        this._nVolume += valor;
    }

    public get nCanal(): number {
        return this._nCanal;
    }

    public get nVolume(): number {
        return this._nVolume;
    }

    public changeVolume(value: boolean) {
        value ? this._nVolume++ : this._nCanal--;
    }
    public changeCanal(value: boolean) {
        value ? this._nCanal++ : this._nVolume--;
    }

    public goToCanal(value: number) {
        value >= 0 ? this._nCanal = value : console.log("Erro");
    }

    public toString(): string {
        return `Canal: ${this.nCanal} \nVolume: ${this.nVolume}\n`;
    }
}
let c = new Televisao();

c.nVolume = 10;
c.nVolume

console.log("" + c);
 */
/* class Controle {
    private _tv: Televisao;

    constructor() {
        this._tv = new Televisao();
    }

    public changeCanal(value: boolean){
        this._tv.changeCanal(value);
        console.log("" + this._tv)
    }

    public changeVolume(value: boolean){
        this._tv.changeVolume(value);
        console.log("" + this._tv);
    }

    public goToCanal(value: number){
        this._tv.goToCanal(value);
        console.log("" + this._tv);
    }
}

let c: Controle = new Controle();

for(let i = 0; i< 3; i++){
    c.changeCanal(true);
}
for(let i = 0; i< 3; i++){
    c.changeVolume(true);
}

c.goToCanal(50);
 */
class Televisao {
    constructor() {
        this._canal = 0;
        this._volume = 0;
    }
    getCanal() {
        return this._canal;
    }
    set canal(value) {
        this._canal += value;
    }
    getVolume() {
        return this._volume;
    }
    set volume(value) {
        this._volume += value;
        console.log(this._volume);
    }
}
class ControleRemoto {
    constructor() {
        this._televisao = new Televisao();
    }
    diminuir_volume() {
        this._televisao.volume--;
    }
    aumentar_volume() {
        this._televisao.volume += 1;
    }
    diminuir_canal() {
        this._televisao.canal--;
    }
    aumentar_canal() {
        this._televisao.canal++;
    }
    canal_indicar(canal) {
        this._televisao.canal = canal;
    }
    consultar_volume() {
        console.log(this._televisao.getVolume());
    }
    consultar_canal() {
        console.log(this._televisao.getCanal());
    }
}
let controle = new ControleRemoto();
for (let i = 0; i < 5; i++) {
    controle.consultar_volume();
    controle.aumentar_volume();
}
