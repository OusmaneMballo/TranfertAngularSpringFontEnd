import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnvoiComponent} from './components/envoi/envoi.component';
import {OperationsComponent} from './components/operations/operations.component';
import {DetailComponent} from './components/detail/detail.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/envoi',
   pathMatch: 'full' 
  },
  {
    path: "envoi",
    component: EnvoiComponent
  },
  {
    path: 'operations',
    component: OperationsComponent
  }
  ,
  {
    path: 'detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
