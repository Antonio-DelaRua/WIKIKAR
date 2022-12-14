import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//clases de firebase
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//configuracion de firebase
import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { ConcesionarioComponent } from './pages/concesionario/concesionario.component';
import { FooterComponent } from './components/footer/footer.component';
import { FerrariComponent } from './components/Marcas/ferrari/ferrari.component';
import { LamborghiniComponent } from './components/Marcas/lamborghini/lamborghini.component';
import { BmwComponent } from './components/Marcas/bmw/bmw.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PorscheComponent } from './components/Marcas/porsche/porsche.component';

import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCarComponent,

    NavbarComponent,
    AboutComponent,
    ConcesionarioComponent,
    FooterComponent,
    FerrariComponent,
    LamborghiniComponent,
    BmwComponent,
    NotFoundComponent,
    PorscheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

