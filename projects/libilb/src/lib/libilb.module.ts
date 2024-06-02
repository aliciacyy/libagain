import { NgModule } from '@angular/core';
import { LibilbComponent } from './libilb.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleButtonComponent } from '../public-api';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    LibilbComponent,
    ButtonComponent,
    ToggleButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ToggleButtonModule,
  ],
  exports: [
    LibilbComponent,
    ButtonComponent,
    ToggleButtonComponent
  ]
})
export class LibilbModule { }
