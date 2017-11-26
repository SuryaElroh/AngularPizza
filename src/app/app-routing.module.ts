import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientFormComponent } from './ingredient/ingredient-form/ingredient-form.component';
import { ListPizzaComponent } from "./pizza/list-pizza/list-pizza.component";
import { DetailsPizzaComponent } from "./pizza/details-pizza/details-pizza.component";
import { FormPizzaComponent } from "./pizza/form-pizza/form-pizza.component";
import { ListIngredientComponent } from "./ingredient/list-ingredient/list-ingredient.component";

/**
 * These are the routes of the site
 * It redirect to the right component depending the url
 */
const routes: Routes = [
  {
    path: 'pizza/list',
    component: ListPizzaComponent
  },{
    path: 'pizza/details/:id',
    component: DetailsPizzaComponent,
  },{
    path: 'pizza/form',
    component: FormPizzaComponent
  },{
    path: 'pizza/form/:id',
    component: FormPizzaComponent
  },{
    path: 'ingredient/list',
    component: ListIngredientComponent
  },{
    path: 'ingredient/add',
    component: IngredientFormComponent,
  },{
    path: 'ingredient/modify/:id',
    component: IngredientFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
