import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CiclosListaComponent } from './ciclos-lista/ciclos-lista.component';
import { CiclosFormComponent } from './ciclos-form/ciclos-form.component';
import { CiclosRoutingModule } from './ciclos-routing.module';


@NgModule({
  declarations: [
    CiclosFormComponent,
    CiclosListaComponent
  ],
  imports: [
    CommonModule,
    CiclosRoutingModule,
    FormsModule
  ],
  exports: [
    CiclosFormComponent,
    CiclosListaComponent
  ]
})
export class CiclosModule { }
