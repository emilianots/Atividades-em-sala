class Pessoa {
    private _nome: string;
    private _altura: string;
    private _dataNasc: Date;

    constructor(nome: string, dataNasc: string, altura: string) {
        this._nome = nome;
        this._altura = altura;
        this._dataNasc = new Date(dataNasc);
    }

    public get nome(): string {
        return this._nome;
    }

    public get dataNasc(): string {
        return "" + this._dataNasc;
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

let p = new Pessoa("Zé", "1997-2-10", "1.80");

//console.log(p.calcIdade());
console.log("" + p);
