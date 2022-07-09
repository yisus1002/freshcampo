
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

// para trabajar con formularios
import { FormsModule } from '@angular/forms';

//para realizar alertas 
// import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { NoimagePipe } from './pipes/noimage.pipe';

//Haccer peticiones 
import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { MisproductosComponent } from './components/misproductos/misproductos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RolPipe } from './pipes/rol.pipe';

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
    NoimagePipe,
    MisproductosComponent,
    NosotrosComponent,
    RolPipe,
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
      //
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideStorage(() => getStorage()),
      // ToastrModule.forRoot(),
  ],
  providers: [
    FreshcampoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
// 