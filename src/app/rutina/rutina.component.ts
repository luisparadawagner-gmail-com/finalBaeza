import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../clases/cliente';
import { Rutina } from '../clases/rutina';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.component.html',
  styleUrls: ['./rutina.component.css']
})
export class RutinaComponent implements OnInit {

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private router:Router) { }


rutinaForm: FormGroup;
parametro:any;
rutina :Rutina;

  ngOnInit(): void {
    this.parametro= this.route.snapshot.params;
  

  if (Object.keys(this.parametro).length) {
    this.rutina = this.parametro;
  }

  this.initForm(this.rutina);
}



initForm (elemento : Rutina){

 this.rutinaForm = this.fb.group({
 nombreRutina : [elemento ? elemento.nombreRutina:'',Validators.required],
 nroRep : [elemento ? elemento.nroRep:''],
 peso : [elemento? elemento.peso:''],
 
 }); 
};

// submit(){
 
// }


cargarDatos(){
let rut1 : Rutina = this.rutinaForm.value;
this.router.navigate(['app-listar', rut1]);

};
 
}
