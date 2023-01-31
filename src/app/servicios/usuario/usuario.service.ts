import { Injectable } from '@angular/core';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private firestore: Firestore) { }

    //funciones

    agregarUsuario(usuario:Usuario){
      const usuarioRef = collection(this.firestore, 'usuarios');
      return addDoc(usuarioRef, usuario) 
    }
    obtenerUsuario():Observable<Usuario[]>{
      const usuarioRef = collection(this.firestore, 'usuarios')
      return collectionData(usuarioRef, {idField:'id'}) as Observable<Usuario[]>
    }
    eliminarUsuario( usuario : Usuario){
      const usuarioRef = doc(this.firestore, `usuarios/${usuario.id}`)
      return deleteDoc(usuarioRef);
    } 
}
