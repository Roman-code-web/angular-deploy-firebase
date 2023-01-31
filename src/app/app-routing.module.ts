import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NuevousuarioComponent } from './pages/nuevousuario/nuevousuario.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'nuevoUsuario', component:NuevousuarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
