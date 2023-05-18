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
import { EfxComponent } from './components/others/efx/efx.component';
import { NeonComponent } from './components/others/neon/neon.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavAdminComponent } from './components/others/nav-admin/nav-admin.component';
import { ListaProdComponent } from './components/pages/lista-prod/lista-prod.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarComponent } from './components/modales/agregar/agregar.component';

// Angular material
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ControlComponent } from './components/others/control/control.component';


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
    EfxComponent,
    NeonComponent,
    NavAdminComponent,
    ListaProdComponent,
    AgregarComponent,
    ControlComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
