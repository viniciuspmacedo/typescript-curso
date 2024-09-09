export abstract class View<T>{
    private elemento: HTMLElement;

    constructor(seletor:string){
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    abstract template(model: T): string
}