import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ColoresPageRoutingModule } from './colores-routing.module';

import { ColoresPage } from './colores.page';
import { SharedModuleModule } from '../modules/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ColoresPageRoutingModule, SharedModuleModule
  ],
  declarations: [ColoresPage]
})
export class ColoresPageModule {}
