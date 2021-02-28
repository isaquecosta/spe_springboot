import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProfissionalComponent } from './form-profissional/form-profissional.component';
import { ListarProfissionalComponent } from './listar-profissional/listar-profissional.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfissionalRoutingModule } from './profissional-routing.module';

@NgModule({
  declarations: [
    FormProfissionalComponent,
    ListarProfissionalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProfissionalRoutingModule
  ]
})
export class ProfissionalModule { }
