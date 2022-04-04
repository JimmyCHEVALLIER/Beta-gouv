import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CompteurService } from './services/compteur-service';

import { AppComponent } from './app.component';
import { CompteurComponent } from './components/compteur/compteur.component';
import { ControllerComponent } from './components/controller/controller.component';
import { CadranComponent } from './components/cadran/cadran.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CompteurComponent,
    ControllerComponent,
    CadranComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [CompteurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
