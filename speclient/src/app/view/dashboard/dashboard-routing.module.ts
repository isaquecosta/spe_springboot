import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VinculoSpeComponent } from './vinculo-spe/vinculo-spe.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'Home'},
    component: VinculoSpeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
