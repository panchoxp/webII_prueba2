import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private http:HttpClient) { }
  private API_USUARIOS= 'http://localhost:3000/users'

  getUsuario(): Observable<any> {
    return this.http.get(this.API_USUARIOS)
  }
  getUsuarioID(id: any):Observable<any>{
    return this.http.get(`${this.API_USUARIOS}/${id}`)//traer un unico elemento, mas facil asi
  }

//post
postUsuario(item: any): Observable<any> {
  return this.http.post(this.API_USUARIOS, item)
}
//put-editar
putUsuario(item:any): Observable<any> {
  return this.http.put(`${this.API_USUARIOS}/${item.id}`,item)
  //return this.http.put(this.API_PRODUCTO+"/"+item.id,item)
}

//DELETE
deleteUsuario(id:any):Observable<any>{
  return this.http.delete(`${this.API_USUARIOS}/${id}`)
}
}
