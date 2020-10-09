import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../registros.service';
import { RegistroModel } from '../usuarios/shared/registro.model';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {
  registros: Array<any> = new Array();
  registro: RegistroModel = new RegistroModel();
  constructor(private registrosService: RegistrosService) { }

  ngOnInit(){
    this.listarRegistros();
    
  }

  removerRegistros(id:number){
    var r = confirm("Quer confirmar a Exclusão do Registro?");
    if (r == true) {
      this.registrosService.removerRegistro(id).subscribe(registro =>{
        this.registro = new RegistroModel();
        this.listarRegistros()
      })
      
    } else {
      return false
    }
  }

  listarRegistros(){
    this.registrosService.listarRegistros().subscribe(registros =>{
      this.registros = registros;
      
    }, err => {
      console.log("Erro ao listar Registros", err)
    })
  }

}
