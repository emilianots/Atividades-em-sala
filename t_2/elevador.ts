

class Elevador {
    private _capacidade: number;
    private _lotacao: number;
    private _andarAtual: number;
    private _andaresPredio: number;

    constructor(capacidade: number, andarPredio: number) {
        this._capacidade = capacidade;
        this._andaresPredio = andarPredio;
        this._lotacao = 0;
        this._andarAtual = 0;
    }
    

    public entrar(qtd: number) {
        if ((this._lotacao + qtd) > this._capacidade) {
            this._lotacao = this._capacidade;
            return;
        }
        this._lotacao += qtd;
    }

    public sair(qtd: number) {
        if (this._lotacao == 0) {
            return;
        }
        if ((this._lotacao - qtd) < 0){
            this._lotacao = 0;
            return;
        }
        this._lotacao -= qtd;
    }

    public subir(andar: number) {
        if (this._andarAtual == this._andaresPredio) {
            return;
        }
        if ((this._andarAtual + andar) > this._andaresPredio) {
            this._andarAtual = this._andaresPredio;
            return;
        }

        this._andarAtual++;
    }

    public descer(andar: number) {
        if (this._andarAtual == 0) {
            return;
        }
        if ((this._andarAtual - andar) <= 0) {
            this._andarAtual = 0;
            return;
        }
        this._andarAtual--;
    }

    public toString(): string {
        return `\n--------------\nAndares do prédio: ${this._andaresPredio} \nAndar do elevador: ${this._andarAtual} \nHá ${this._lotacao} pessoas no elevador \nA capacidade máxima é ${this._capacidade}`
    }

}

let el = new Elevador(10, 25);


el.entrar(2);
el.entrar(4);
el.entrar(5);
console.log("" + el)
el.entrar(2);
el.entrar(3);

el.sair(2);
el.sair(2);
console.log("" + el)

el.subir(4);
el.subir(5);
el.subir(3);
console.log("" + el)

el.descer(3);

console.log("" + el)