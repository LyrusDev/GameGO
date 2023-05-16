import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NosotrosComponent } from './components/pages/nosotros/nosotros.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductosComponent } from './components/pages/productos/productos.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'productos', component: ProductosComponent },

  // { path: '', component: HomeComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
