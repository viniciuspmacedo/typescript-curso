import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView{
    private elemento: HTMLElement;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor);
    }
    template(model: Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <td>DATA</td>
                    <td>QUANTIDADE</td>
                    <td>VALOR</td>
                </tr>
            </thead>
            <tbody>
                ${model.listaNegociacoes().map( negociacao => {
                    return `
                    <tr>
                        <td>
                            ${new Intl.DateTimeFormat().format(negociacao.data)}
                        </td>
                        <td>
                            ${negociacao.quantidade}
                        </td>
                        <td>
                            ${negociacao.valor}
                        </td>
                    </tr>`
                }).join('')}
            </tbody>
        </table>
        `
    }

    update(model: Negociacoes): void{
        this.elemento.innerHTML = this.template(model)
    }
}