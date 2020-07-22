import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CargarComponent } from './cargar/cargar.component';
import { ListarComponent } from './listar/listar.component';
import { RutinaComponent } from './rutina/rutina.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { ConectaService } from './servicios/conecta.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    CargarComponent,
    ListarComponent,
    RutinaComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
    

  ],
  providers: [ConectaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
