import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private servicios: LoginService, private ruta: Router) { }


  user: string = '';
  pass: string = '';

  crearJSON() {
    const data = {
      user: this.user,
      pass: this.pass
    }

    this.limpiar();

    return data;
  }

  limpiar() {
    this.user = '';
    this.pass = '';
  }

  login() {
    const temp = this.crearJSON()

    this.servicios.getUsers().subscribe(gamego => {
      for (const doc of gamego) {
        if (JSON.stringify(temp) === JSON.stringify(doc)) {
          console.log('Acceso permitido');
          localStorage.setItem('login', 'true')

          // Navegar
          this.ruta.navigate(['/productos'])

          break;
        } else {
          localStorage.setItem('login', 'false')

          // this.ruta.navigate(['/registro]'])
        }
      }
    })

  }

}
