import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AdminRoutingModule,
  routingAdminComponents,
} from './admin-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent, routingAdminComponents],
  imports: [CommonModule, AdminRoutingModule],
  bootstrap: [MainComponent],
})
export class AdminModule {}
