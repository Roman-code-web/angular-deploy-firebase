import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListaComponent } from './lista/lista.component';



@NgModule({
  declarations: [
    HomeComponent,
    ListaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    ListaComponent
  ]
})
export class PagesModule { }
