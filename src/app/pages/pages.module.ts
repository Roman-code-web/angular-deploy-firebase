import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { RouterModule } from '@angular/router';
import { NuevousuarioComponent } from './nuevousuario/nuevousuario.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListaComponent,
    NuevousuarioComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    RouterModule
  ],
  exports:[
    HomeComponent,
    ListaComponent
  ]
})
export class PagesModule { }
