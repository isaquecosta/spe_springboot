import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEstabelecimentoComponent } from './listar-estabelecimento/listar-estabelecimento.component';
import { FormEstabelecimentoComponent } from './form-estabelecimento/form-estabelecimento.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EstabelecimentoRoutingModule } from './estabelecimento-routing.module';

@NgModule({
  declarations: [
    ListarEstabelecimentoComponent,
    FormEstabelecimentoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EstabelecimentoRoutingModule
  ]
})
export class EstabelecimentoModule { }
