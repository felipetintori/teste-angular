import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ReactiveFormsModule} from '@angular/forms';

import{HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './inicial/inicial.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { RegistrosService } from './registros.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditComponent } from './edit/edit.component';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    LoginComponent,
    HeaderComponent,
    SearchComponent,
    CadastroComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    FormsModule,
    TextMaskModule 
  ],
  providers: [RegistrosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
