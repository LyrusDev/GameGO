import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/others/footer/footer.component';
import { NavbarComponent } from './components/others/navbar/navbar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NosotrosComponent } from './components/pages/nosotros/nosotros.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProductosComponent } from './components/pages/productos/productos.component';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import { AdminsComponent } from './components/pages/admins/admins.component';
import { EfxComponent } from './components/others/efx/efx.component';
import { NeonComponent } from './components/others/neon/neon.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NosotrosComponent,
    LoginComponent,
    ProductosComponent,
    ContactoComponent,
    AdminsComponent,
    EfxComponent,
    NeonComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
