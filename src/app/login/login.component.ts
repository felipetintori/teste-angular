import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Usuarios} from '../../app/usuarios/shared/usuarios';
import{FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formUsuario: FormGroup;

  constructor(public router: Router) {
    
  }

  //:::::: Mostrar/Esconder BTN Input senha::::::::
  
  mostrarSenha(){
    document.getElementById("mostrarSenha").style.display = "none";
    document.getElementById("retirarSenha").style.display = "block";
    let senha = document.getElementById("senha");
    
    
    senha.setAttribute("type", "text");
  }

  retirarSenha(){
  
    document.getElementById("mostrarSenha").style.display = "block";
    document.getElementById("retirarSenha").style.display = "none";
    let senha = document.getElementById("senha");
    
    senha.setAttribute("type", "password");
  }

    //:::::: FIM Mostrar/Esconder BTN Input senha::::::::

    //:::::: Criando Form Control::::::::

  
  createForm(usuario: Usuarios){
    this.formUsuario = new FormGroup({
      email: new FormControl(usuario.usuario),
      senha: new FormControl(usuario.senha)
    })

  }

  //:::::: FIM Criando Form Control::::::::

  //:::::: onClick Inputs::::::::

  input(){
    document.getElementById("alertError").style.display = "none";
    
  }

  //:::::: FIM onClick Inputs::::::::

  //:::::: Keyup Inputs::::::::

  inputKey(){
    document.getElementById("btnLogin").removeAttribute("disabled")
  }

  //:::::: FIM Keyup Inputs::::::::

  //:::::: submit Forms:::::::

  onSubmit(){
    let usuarios = this.formUsuario.value;
    console.log(usuarios.email)
    if(usuarios.email != "spcteste01@spcbrasil.org.br" || usuarios.senha != "123456"){
      document.getElementById("alertError").style.display = "block";
      
      this.formUsuario.reset();
    }else{
      this.router.navigate(['/inicial']);
    }
  }
  //::::::FIM submit Forms:::::::

    //::::::Iniciando a pagina:::::::

  ngOnInit() {
    this.createForm(new Usuarios());
    
    //::::::FIM Iniciando a pagina:::::::
    
  }


}
