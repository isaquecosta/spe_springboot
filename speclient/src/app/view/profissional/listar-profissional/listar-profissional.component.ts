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
      this.blockUI.start(ConstantsUtil.BUSCANDO);
      this.profissionalService.listar(this.profissional, this.datatable)
        .pipe(finalize(() => this.blockUI.stop()))
        .subscribe((response) => {
          this.profissionais = response;
        });
      this.travarCarregamentoTabela = true;
  }

  excluir(id: number) {
    this.confirmationService.confirm({
      message: 'Deseja realmente excluir este item?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'ui-button-success',
      rejectButtonStyleClass: 'ui-button-danger',
      accept: () => {
        this.blockUI.start(ConstantsUtil.EXCLUINDO);
        this.profissionalService.excluir(id)
          .pipe(finalize(() => this.blockUI.stop()))
          .subscribe(() => {
            this.limpar();
            this.liberaCarregamento();
            this.montarMsgSucesso(ConstantsUtil.OPERACAO_SUCESSO);
          },
            erro => {
              this.montarMsgAlerta(erro.error.title);
            });
      }
    });
  }

  cadastrar(){
    this.router.navigate(['profissional/cadastrar']);
  }

  editar(id: number) {
    this.router.navigate([`/profissional/editar/${id}`]);
  }

  travarCarregamento(event) {
    this.travarCarregamentoTabela = event;
  }

  liberaCarregamento() {
    this.travarCarregamentoTabela = false;
    this.listar();
  }

  limpar(){
    this.profissional = new Profissional();
    this.datatable.reset();
  }
}
