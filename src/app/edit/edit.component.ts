import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Edit } from '../../app/usuarios/shared/edit';
import { RegistroModel } from '../usuarios/shared/registro.model';
import { RegistrosService } from '../registros.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public url = this.router.url.split("/");
  registros: Array<any> = new Array();
  registro: RegistroModel = new RegistroModel();

  //:::::: Criando Form Control::::::::

  formCadastro: FormGroup;
  routes: any;

  constructor(public router: Router, private registrosService: RegistrosService, private http: HttpClient) {

  }

  createForm(usuario: Edit) {
    this.formCadastro = new FormGroup({
      cpf: new FormControl(usuario.cpf),
      nome: new FormControl(usuario.nome),
      valor: new FormControl(usuario.valor),
      data: new FormControl(usuario.data)
    
    })


  }
  //:::::: FIM Criando Form Control::::::::

  atualizar(id:number) {
    this.registrosService.atualizarRegistro(id, this.registro).subscribe(registro => {
      this.registro = new RegistroModel();
      this.listarRegistros();
    }, err => {
      console.log("Erro ao atualizar o aluno")
    })

    

    
  }
  //::::::FIM submit Forms:::::::

  ngOnInit() {
    this.createForm(new Edit());
    
    this.listarRegistros();

    console.log(this.url[2])
    
    

  }



  listarRegistros() {
    this.registrosService.listarRegistros().subscribe(registros => {
      this.registros = registros;

    }, err => {
      console.log("Erro ao listar Registros", err)
    })




  }

}
