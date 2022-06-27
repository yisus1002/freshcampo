import { FreshcampoService } from './services/freshcampo.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AvatarComponent } from './components/shared/avatar/avatar.component';
import { FeatureRoutingModule } from './app.routes';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ProductoComponent } from './components/producto/producto.component';


// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { NoimagePipe } from './pipes/noimage.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AvatarComponent,
    PerfilComponent,
    ClienteComponent,
    ProductoComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-nf0y8src.us.auth0.com',
      clientId: 'KBtfwcIpyIW3zdYECBEqsUTqzh3021id',
      cacheLocation: 'localstorage', 
      useRefreshToken:true,}),
  ],
  providers: [
    FreshcampoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// 