class Pessoa {
    private _nome: string;
    private _altura: string;
    private _dataNasc: Date;

    constructor(nome: string, altura: string, dataNasc: Date) {
        this._nome = nome;
        this._altura = altura;
        this._dataNasc = dataNasc;
    }

    public get nome(): string {
        return this._nome;
    }

    public get dataNasc(): string {
        return `${this._dataNasc.getFullYear()}-${this._dataNasc.getMonth()}-${this._dataNasc.getDay()}`;
    }

    public get altura(): string{
        return this._altura;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public set dataNasc(value: string) {
        this._dataNasc = new Date(value);
    }

    public set altura(value: string){
        this._altura = value;
    }

    public calcIdade(): string {
        let today: Date = new Date();
        return `${today.getFullYear() - this._dataNasc.getFullYear()}`;
    }

    public toString(): string {
        return `Nome: ${this._nome} \nData de nascimento: ${this.dataNasc} \nIdade: ${this.calcIdade()} anos \nAltura: ${this._altura}`;
    }
}


class Main{
    public pessoa: Pessoa;

    constructor(nome: string, altura: string, dataNasc: string){
        this.pessoa = new Pessoa(nome, altura, new Date(dataNasc));
    }
}

let m: Main = new Main("Clark", "1,90", "1988-3-12");

console.log("" + m.pessoa);