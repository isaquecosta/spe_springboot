import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEstabelecimentoComponent } from './listar-estabelecimento/listar-estabelecimento.component';
const routes: Routes = [
    {
      path: 'listar',
      component: ListarEstabelecimentoComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstabelecimentoRoutingModule { }
