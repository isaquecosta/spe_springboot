import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProfissionalComponent } from './listar-profissional/listar-profissional.component';
const routes: Routes = [
    {
      path: 'listar',
      component: ListarProfissionalComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfissionalRoutingModule { }
