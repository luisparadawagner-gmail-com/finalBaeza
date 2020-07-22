import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConectaService } from '../servicios/conecta.service';
import { Cliente } from '../clases/cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'telefono','direccion','fechaNac','editar', 'asociar', 'listarRut'];
  dataSource: any[] = [];

  constructor(private router:Router,private conectaService: ConectaService,private route: ActivatedRoute) { }

  parametro:any;

  ngOnInit(): void {

  this.getClientes();
  }


  // este metodo esta en el componente conecta.service.ts
    
  getClientes() {
    this.conectaService.getCliente().subscribe((clientes) => {
    //	debugger;
      this.dataSource = clientes;

      this.parametro = this.route.snapshot.params;

    if (Object.keys(this.parametro).length) {
      this.recibeCliente(this.parametro);
    }

    });
  }

  recibeCliente(a1: Cliente) {
      
      this.dataSource.push(a1);
    };


  goToEditar(user) {		
        this.router.navigate(["/app-cargar",user]);
      }
  

      
}
