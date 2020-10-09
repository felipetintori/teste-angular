import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, concat } from 'rxjs';
import { RegistroModel } from './usuarios/shared/registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor(private http: HttpClient) {}
    cadastrarRegistro(registro: RegistroModel) : Observable<any>{
     return this.http.post("http://5d52bcb73432e70014e6bc2c.mockapi.io/registro", registro)
    }
    listarRegistros() : Observable<any>{
      return this.http.get("http://5d52bcb73432e70014e6bc2c.mockapi.io/registro") 
    }

    atualizarRegistro(id:any, registro: RegistroModel) : Observable<any>{
      return this.http.put("http://5d52bcb73432e70014e6bc2c.mockapi.io/registro/".concat(id), registro);
    }

    removerRegistro(id: any){
      return this.http.delete("http://5d52bcb73432e70014e6bc2c.mockapi.io/registro/".concat(id));
    }
  
   
}
