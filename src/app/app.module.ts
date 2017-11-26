import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IngredientFormComponent } from './ingredient/ingredient-form/ingredient-form.component';
import { ListPizzaComponent } from './pizza/list-pizza/list-pizza.component';
import { ListIngredientComponent } from './ingredient/list-ingredient/list-ingredient.component';

import {PizzaService} from "./service/pizza.service";
import {IngredientService} from "./service/ingredient.service";
import { DetailsPizzaComponent } from './pizza/details-pizza/details-pizza.component';
import { FormPizzaComponent } from './pizza/form-pizza/form-pizza.component';

/**
 * @author : Surya Elroh
 * @abstract : This is the Angular pizza project
 * This module declare all the modules we need for this website.
 */
@NgModule({
  declarations: [
    AppComponent,
    IngredientFormComponent,
    ListPizzaComponent,
    ListIngredientComponent,
    DetailsPizzaComponent,
    FormPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PizzaService,
    IngredientService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
