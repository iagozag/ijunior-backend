class Processos{
    #id;
    #nome;
    #prioridade;

    Processos(id, nome, prioridade){
        this.#id = id;
        this.#nome = nome;
        this.#prioridade = prioridade;
    }

    imprimir_processo(){
        console.log(`${this.#id} ${this.#nome} ${this.#prioridade}`);
    }
}

class ListaProcessos{
    adicionar
}
