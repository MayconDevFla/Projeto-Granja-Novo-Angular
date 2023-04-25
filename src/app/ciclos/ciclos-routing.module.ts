import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CiclosFormComponent } from './ciclos-form/ciclos-form.component';
import { CiclosListaComponent } from './ciclos-lista/ciclos-lista.component';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
  {
    path: 'ciclos',
    component: LayoutComponent, children: [
      {
        path: 'form',
        component: CiclosFormComponent
      },
      {
        path: 'form/:id',
        component: CiclosFormComponent
      },
      {
        path: 'lista',
        component: CiclosListaComponent
      },
      {
        path: '',
        redirectTo: '/ciclos/lista', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CiclosRoutingModule { }
