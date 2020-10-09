import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import { Cadastro } from '../../app/usuarios/shared/cadastro';
import { RegistroModel } from '../usuarios/shared/registro.model';
import { RegistrosService } from '../registros.service';


declare var $: any;

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  public mask = [ /\d/ , /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/ , /\d/, /\d/, '-', /\d/, /\d/,];

  registro: RegistroModel = new RegistroModel();
  formCadastro: FormGroup;
  constructor(public router: Router, private registrosService: RegistrosService) {

  }

   //:::::: Criando Form Control::::::::

  createForm(usuario: Cadastro) {
    this.formCadastro = new FormGroup({
      cpf: new FormControl(usuario.cpf),
      nome: new FormControl(usuario.nome),
      valor: new FormControl(usuario.valor),
      data: new FormControl(usuario.data)
    })

  }

  //:::::: FIM Criando Form Control::::::::

  //:::::: submit Forms:::::::

  onSubmit() {
  
    $(".alert-hide").show()
    
  }
  //::::::FIM submit Forms:::::::

  confirme(e){
    $(".alert-hide").hide()
    if(e){
      this.registrosService.cadastrarRegistro(this.registro).subscribe(registro => {

      }, err => {
        console.log('erro ao cadastrar o registro', err)
      })
      

    }else{
      return false
      
    }
  }

 

  ngOnInit() {
    this.createForm(new Cadastro());
  }

}
