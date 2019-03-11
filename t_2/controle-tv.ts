

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
}/* 
let c = new Televisao();

c.nVolume = 10;

console.log("" + c); */

class Controle {
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