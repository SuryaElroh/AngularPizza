import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../../model/ingredient";
import { IngredientService } from "../../service/ingredient.service";
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent implements OnInit {
  private ingredients: Ingredient[];
  private socket = io.connect('https://pizza-project-cloned-suryae.c9users.io');
  private success = false;

  constructor(private ingredientService: IngredientService, private router: Router) { }

  ngOnInit() {
    /**
     * Listen to the server waiting for a new ingredient
     * Using socket.io
     */
    this.socket.on('new ingredient available', (data) => {
      console.log(data);
      this.ingredients.push(data);
      this.success = true;
    })
    this.ingredientService.get().subscribe(data => this.ingredients = data);
  }

  /**
   * Call the delete method of PizzaService
   * Then redirect to the pizza list page
   * @param id
   * @return if the action has been correctly done
   */
  delete(id) {
    console.log(id);
    this.ingredientService.delete(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['ingredient/list']);
    });
  }

  /**
   * Close the alert
   */
  close(){
    this.success = false;
  }

}
