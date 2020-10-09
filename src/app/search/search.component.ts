import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import{Search} from '../../app/usuarios/shared/search';
import { RegistroModel } from '../usuarios/shared/registro.model';
import { RegistrosService } from '../registros.service';

declare var $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public mask = [ /\d/ , /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/ , /\d/, /\d/, '-', /\d/, /\d/,];
  registros: Array<any> = new Array();
  registro: RegistroModel = new RegistroModel();
  formSearch: FormGroup;

  constructor(public router: Router, private registrosService: RegistrosService) {
    
  }


    //:::::: Criando Form Control::::::::

  
  createForm(usuario: Search){
    this.formSearch = new FormGroup({
      cpf: new FormControl(usuario.cpf)
    })

  }

  //:::::: FIM Criando Form Control::::::::

  ngOnInit() {
    this.createForm(new Search());
    this.listarRegistros();
    
    //::::::FIM Iniciando a pagina:::::::
    
  }

  search() {
    for(var i = 0; i < this.registros.length; i++){
      if(this.registro.cpf != this.registros[i].cpf ){
        $("#cpf-" + this.registros[i].id).closest("#tr-" + this.registros[i].id).hide()
        $("#painel-cpf-" + this.registros[i].id).closest("#painel-" + this.registros[i].id).hide()
      }
      else{
        $("#cpf-" + this.registros[i].id).closest("#tr-" + this.registros[i].id).show()
      }
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
