import { Component, OnInit } from '@angular/core';
import { BaseController } from 'src/app/shared/controller/base-controller';
import { ConstantsUtil } from 'src/app/util/constants-util';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MessageService } from 'primeng';
import { Profissional } from 'src/app/domain/profissional';
import { ProfissionalService } from 'src/app/shared/service/profissional.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form-profissional',
  templateUrl: './form-profissional.component.html',
  styleUrls: ['./form-profissional.component.css']
})
export class FormProfissionalComponent extends BaseController{

  profissional= new Profissional();

  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private router: Router,
    private profissionalService: ProfissionalService,
    messageService: MessageService) {

    super(messageService);
    }

  

  salvar(form) {
    if (!form.valid) {
      return;
    }

    if (this.profissional.id) {
      this.editar();
    } else {
      this.cadastrar();
    }
  }

  cadastrar() {
    this.blockUI.start(ConstantsUtil.SALVANDO);
    this.profissionalService.salvar(this.profissional)
      .pipe(finalize(() => this.blockUI.stop()))
      .subscribe(() => {
          this.router.navigate(['/profissional/listar']);
          this.montarMsgSucesso(ConstantsUtil.OPERACAO_SUCESSO);
        },
        erro => {
          this.montarMsgAlerta(erro.error.detail);
        });
  }

  editar() {
      this.blockUI.start(ConstantsUtil.SALVANDO);
      this.profissionalService.editar(this.profissional)
        .pipe(finalize(() => this.blockUI.stop()))
        .subscribe(() => {
            this.router.navigate(['/profissional/listar']);
            this.montarMsgSucesso(ConstantsUtil.OPERACAO_SUCESSO);
          },
          erro => {
            this.montarMsgAlerta(erro.error.detail);
          });
  }

  cancelar(): void {
    window.history.back();
  }

}
