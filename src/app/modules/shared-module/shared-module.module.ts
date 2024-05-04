import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiomasComponent } from 'src/app/idiomas/idiomas.component';


@NgModule({
  declarations: [IdiomasComponent],
  imports: [
    CommonModule
  ],
  exports: [IdiomasComponent] 

})
export class SharedModuleModule { }
