import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NosotrosComponent } from './components/pages/nosotros/nosotros.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { ListaProdComponent } from './components/pages/lista-prod/lista-prod.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'login', component: LoginComponent },

  // Administradores
  { path: 'lista-prod', component: ListaProdComponent, canActivate: [LoginGuard] },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
