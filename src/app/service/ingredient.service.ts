import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

/**
 * This is were we define all the needed method about ingredient to interact with the API
 */

@Injectable()
export class IngredientService {
  /*
   * API url
   */
  private url: string = 'https://pizza-project-cloned-suryae.c9users.io/ingredients/';

  constructor(private httpClient: HttpClient) { }

  /**
   * Get all the ingredients stored in the DB
   * @returns {Observable<Ingredient>}
   */
  get(): Observable<Ingredient[]>{
    return this.httpClient.get<Ingredient[]>(this.url);
  }

  /**
   * Get all the details of one ingredient by its id
   * @param id
   * @returns {Observable<Ingredient>}
   */
  getOne(id): Observable<Ingredient>{
    return this.httpClient.get<Ingredient>(this.url + id);
  }

  /**
   * Insert a new ingredient in DB
   * @param new ingredient
   * @returns if the ingredient has been correctly inserted in DB
   */
  add(ingredient) {
    return this.httpClient.post(this.url, ingredient);

  }

  /**
   * Modify an ingredient already in DB
   * @param ingredient
   * @returns if the ingredient has been correctly modified in DB
   */
  modify(ingredient) {
    return this.httpClient.put(this.url, ingredient);
  }

  /**
   * Delete an ingredient by its id
   * @param id
   * @returns if the ingredient has been correctly deleted from DB
   */
  delete(id) {
    return this.httpClient.delete(this.url + id);
  }
}
