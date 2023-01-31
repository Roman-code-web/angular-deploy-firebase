import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    HomeComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports:[
    HomeComponent,
    ListaComponent
  ]
})
export class PagesModule { }
