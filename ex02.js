class Processo{
    #id;
    #nome;
    #prioridade;
    constructor(id, nome, prioridade){
        this.#id = id;
        this.#nome = nome;
        this.#prioridade = prioridade;
    }

    imprimir_processo(){
        console.log(`${this.#id}  ${this.#nome}  ${this.#prioridade}`);
    }

    get_id(){
        return this.#id;
    }

    get_nome(){
        return this.#nome;
    }

    get_prioridade(){
        return this.#prioridade;
    }
}

class ListaProcessos{
    #lista;
    constructor(){
        this.#lista = [];
    }

    adicionar_processo(processo){
        this.#lista.push(processo);
        this.#lista.sort((a, b) => b.get_prioridade() - a.get_prioridade());
        console.log(`processo de id ${processo.get_id()} adicionado`);
    }

    remover_processo_com_maior_prioridade(){
        this.#lista.shift();
        console.log("processo com maior prioridade removido");
    }

    remover_processo_com_menor_prioridade(){
        this.#lista.pop();
        console.log("processo com menor prioridade removido");
    }

    remover_processo_por_id(id){
        for(let i = 0; i < this.#lista.length; i++){
            if(this.#lista[i].get_id() == id){
                this.#lista.splice(i, i);
                console.log(`processo de id ${id} removido`);
                return;
            }
        }
        console.log(`processo de id ${id} nao existe`);
    }

    imprimir_lista(){
        console.log("id nome   p");
        for(let i = 0; i < this.#lista.length; i++){
            this.#lista[i].imprimir_processo();
        }
        console.log();
    }
}

const lista_proc = new ListaProcessos();

let proc = new Processo(1, "proc1", 5);
lista_proc.adicionar_processo(proc);
proc = new Processo(2, "proc2", 1);
lista_proc.adicionar_processo(proc);
proc = new Processo(3, "proc3", 3);
lista_proc.adicionar_processo(proc);
proc = new Processo(4, "proc4", 2);
lista_proc.adicionar_processo(proc);

lista_proc.imprimir_lista();

lista_proc.remover_processo_com_maior_prioridade();
lista_proc.imprimir_lista();

proc = new Processo(5, "proc5", 7);
lista_proc.adicionar_processo(proc);
lista_proc.imprimir_lista();

lista_proc.remover_processo_com_menor_prioridade();
lista_proc.imprimir_lista();

lista_proc.remover_processo_por_id(6);
lista_proc.imprimir_lista();

lista_proc.remover_processo_por_id(4);
lista_proc.imprimir_lista();
