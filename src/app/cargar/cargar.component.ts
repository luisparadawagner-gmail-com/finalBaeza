import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../clases/cliente';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.css']
})
export class CargarComponent implements OnInit {

  constructor(private fb: FormBuilder,private route: ActivatedRoute, private router:Router) { }


  inscripcionForm: FormGroup;
parametro:any;
cliente: Cliente;

  ngOnInit(): void {
    this.parametro= this.route.snapshot.params;
  

  if (Object.keys(this.parametro).length) {
    this.cliente = this.parametro;
  }

  this.initForm(this.cliente);
}



initForm (elemento : Cliente){

 this.inscripcionForm = this.fb.group({
 nombre : [elemento ? elemento.nombre:'',Validators.required],
 apellido : [elemento ? elemento.apellido:''],
 telefono : [elemento? elemento.telefono:''],
 direccion : [elemento? elemento.direccion:''],
 fechaNac : [elemento? elemento.fechaNac:''],
 }); 
};

// submit(){
 
// }


cargarDatos(){
let cliente1 : Cliente = this.inscripcionForm.value;
this.router.navigate(['app-listar', cliente1]);

};
 
}
