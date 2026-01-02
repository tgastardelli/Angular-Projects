function Log(classe: any) {
    console.log('Log', classe)
}

@Log
class Pessoa {
    nome: string = 'Thiago';
    idade: number = 10;

    falar () {
        console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos de idade.`);
    }
}