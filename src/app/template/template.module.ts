import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicsComponent } from './basics/basics.component';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicsComponent } from './dinamics/dinamics.component';
import { FormsModule } from '@angular/forms';
import { CustomMinDirective } from './directivas/custom-min.directive';

@NgModule({
  declarations: [
    BasicsComponent,
    SwitchesComponent,
    DinamicsComponent,
    CustomMinDirective,
  ],
  imports: [CommonModule, TemplateRoutingModule, FormsModule],
})
export class TemplateModule {}
