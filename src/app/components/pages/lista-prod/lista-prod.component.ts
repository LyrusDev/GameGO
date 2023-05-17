import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { AgregarComponent } from '../../modales/agregar/agregar.component';

@Component({
  selector: 'app-lista-prod',
  templateUrl: './lista-prod.component.html',
  styleUrls: ['./lista-prod.component.css']
})
export class ListaProdComponent {

  constructor(private _dialog: MatDialog, private servicio: ProductosService) { }

  dataProductos: any;

  ngOnInit() {
    this.servicio.getProductos().subscribe((productos) => {
      this.dataProductos = productos;
    });
  }

  // Agregar
  agregarProducto() {
    const dialogRef = this._dialog.open(AgregarComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.servicio.getProductos();
        }
      }
    })
  }

  // Editar
  editarProducto(data: any) {
    this._dialog.open(AgregarComponent, {
      data,
    });
    
  }

  // Eliminar
  eliminarProducto(id: number) {
    this.servicio.deleteProductos(id).subscribe({
      next: (res) => {
        alert('Registro eliminado');
        this.servicio.getProductos();
      },
      error: console.log,
      
    })
  }

}
