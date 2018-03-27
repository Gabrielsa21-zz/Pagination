export class Service {

    public setores: string[];

    getSetores(){
        return ['VQ Gerente', 'VQ Cliente', 'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente',
        'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente', 'VQ Agente']

    }


    constructor(){
        this.setores = this.getSetores();
    }


}