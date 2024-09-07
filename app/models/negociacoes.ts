import { Negociacao } from "./negociacao";

export class Negociacoes{
    private negociacoes: Negociacao[] = []

    adicionar(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    listaNegociacoes(): readonly Negociacao[]{
        return this.negociacoes;
    }

}