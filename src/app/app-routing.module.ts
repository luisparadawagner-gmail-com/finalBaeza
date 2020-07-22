import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CargarComponent } from './cargar/cargar.component';
import { ListarComponent } from './listar/listar.component';
import { RutinaComponent } from './rutina/rutina.component';


const routes: Routes = [

{ path: 'app-cargar', component: CargarComponent  },
{ path: 'app-listar', component: ListarComponent },
{ path: 'app-rutina', component: RutinaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
