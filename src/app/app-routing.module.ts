import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'module-1', pathMatch: 'full'},
  { path: 'module-1', loadChildren: './modulo-1/modulo-1.module#Modulo1Module'},
  { path: 'module-2', loadChildren: './modulo-2/modulo-2.module#Modulo2Module'},
  { path: 'module-3', loadChildren: './modulo-3/modulo-3.module#Modulo3Module'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
