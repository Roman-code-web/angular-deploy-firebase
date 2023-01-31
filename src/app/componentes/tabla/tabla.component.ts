import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario/usuario';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  listaUsuarios:any=[];

  constructor(private usuarioservice : UsuarioService){}

  ngOnInit(): void {
    this.getUsuario();
  }

  async getUsuario(){
    try {
      this.usuarioservice.obtenerUsuario().subscribe(
        res=>{
          this.listaUsuarios=res;
        },
        error=>{
          console.log(error);
        }
      )
    } catch (error) {
        console.log(error);
    }
  }

  eliminarUsuario(Usuario:Usuario){
    Swal.fire({
      title: 'Estas Seguro de Eliminar este Usuario?',
      text: "no podrá revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Usuario Eliminado',
        })
        const res=this.usuarioservice.eliminarUsuario(Usuario);
      }
    })
  }
}
