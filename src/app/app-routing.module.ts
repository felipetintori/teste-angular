import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'inicial', component:InicialComponent},
  { path: 'cadastro', component:CadastroComponent},
  { path: 'edit/:id', component:EditComponent}
  
    
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
