import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CargarComponent } from './cargar/cargar.component';
import { ListarComponent } from './listar/listar.component';
import { RutinaComponent } from './rutina/rutina.component';

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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
