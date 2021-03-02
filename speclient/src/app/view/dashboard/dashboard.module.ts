import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VinculoSpeComponent } from './vinculo-spe/vinculo-spe.component';

@NgModule({
  declarations: [
    VinculoSpeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  providers: []})
export class HomeModule { }
