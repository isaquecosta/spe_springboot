import { MessageService } from 'primeng';

export abstract class BaseController {

    constructor(private messageService: MessageService) { }

    ptCalendar = {
        firstDayOfWeek: 1,
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
    };

    montarMsgAlerta(texto: string) {
        this.messageService.add({ severity: 'error', summary: 'Alerta', detail: texto });
    }

    montarMsgSucesso(texto: string) {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: texto });
    }

    montarMsgAviso(texto: string) {
        this.messageService.add({ severity: 'warn', summary: 'Aviso', detail: texto });
    }

}
