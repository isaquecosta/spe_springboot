import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ConfirmationService, MessageService, Table } from 'primeng';
import { Page } from 'src/app/domain/page';
import { Profissional } from 'src/app/domain/profissional';
import { BaseController } from 'src/app/shared/controller/base-controller';
import { ProfissionalService } from 'src/app/shared/service/profissional.service';
import { finalize } from 'rxjs/operators';
import { ConstantsUtil } from 'src/app/util/constants-util';


@Component({
  selector: 'app-listar-profissional',
  templateUrl: './listar-profissional.component.html',
  styleUrls: ['./listar-profissional.component.css'],
  providers: [ConfirmationService]
})
export class ListarProfissionalComponent extends BaseController implements OnInit {

  @BlockUI() blockUI: NgBlockUI;
  @ViewChild('tabela') datatable: Table;

  profissional = new Profissional();
  profissionais: Page<Profissional> = new Page;
  travarCarregamentoTabela: boolean;
  exibeDialog = false;
  colunas = [
    { field: 'nome', header: 'Nome' },
    { field: 'endereco', header: 'Endereço' },
    { field: 'celular', header: 'Celular' },
    { field: 'telefone' , header: 'Telefone'},
    { field: 'funcao' , header: 'Função'},
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private profissionalService: ProfissionalService,
    private confirmationService: ConfirmationService,
    messageService: MessageService) {

    super(messageService);
    }
    
  ngOnInit(): void {
  }

  listar() {
    if (!this.travarCarregamentoTabela) {
      this.blockUI.start(ConstantsUtil.BUSCANDO);
      this.profissionalService.listar(this.profissional, this.datatable)
        .pipe(finalize(() => this.blockUI.stop()))
        .subscribe((response) => {
          this.profissionais = response;
        });
      this.travarCarregamentoTabela = true;
    }
  }

  cadastrar(){
    this.router.navigate(['profissional/cadastrar']);
  }
}
