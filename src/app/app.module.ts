import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompteurComponent } from './compteur/compteur.component';
import { ControllerComponent } from './controller/controller.component';
import { CadranComponent } from './cadran/cadran.component';

@NgModule({
  declarations: [
    AppComponent,
    CompteurComponent,
    ControllerComponent,
    CadranComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
