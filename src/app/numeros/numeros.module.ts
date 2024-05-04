import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumerosPageRoutingModule } from './numeros-routing.module';

import { NumerosPage } from './numeros.page';
import { SharedModuleModule } from '../modules/shared-module/shared-module.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumerosPageRoutingModule, SharedModuleModule
  ],
  declarations: [NumerosPage]
})
export class NumerosPageModule {}
