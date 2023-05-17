import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  gameForm: FormGroup;

  categoria: string[] = [
    'Survival Horror',
    'Action RPG',
    'MOBA',
    'Shooter en primera persona',
    'Juego de lucha',
    'Mundo abierto',
    'Acción-aventura',
    'Supervivencia'
  ];

  constructor(
    private _fb: FormBuilder,
    private servicio: ProductosService,
    private _dialogRef: MatDialogRef<AgregarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.gameForm = this._fb.group({
      id: '',
      juego: '',
      categoria: '',
      precio: '',
      imagen: ''
    });
  }

  ngOnInit(): void {
    this.gameForm.patchValue(this.data)
  }

  guardarJuego() {
    if (this.gameForm.valid) {
      if (this.data) {

        this.servicio.putProductos(this.data.id, this.gameForm.value).subscribe({
          next: (val: any) => {
            alert('Juego actualizado');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        })

      } else {

        this.servicio.postProductos(this.gameForm.value).subscribe({
          next: (val: any) => {
            alert('Juego agregado');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        })

      }
    }
  }

}
