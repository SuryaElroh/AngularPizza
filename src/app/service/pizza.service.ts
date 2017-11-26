import { Injectable } from '@angular/core';
import { Pizza } from '../model/pizza';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

/**
 * This is were we define all the needed method about pizza to interact with the API
 */

@Injectable()
export class PizzaService {
  /*
   * API url
   */
  private url: string = 'https://pizza-project-cloned-suryae.c9users.io/pizzas/';

  constructor(private httpClient: HttpClient) {
  }

  /**
   * Get all the pizzas stored in the DB
   * @returns {Observable<Pizza>}
   */
  get(): Observable<Pizza[]> {
    return this.httpClient.get<Pizza[]>(this.url);
  }

  /**
   * Get all the details of one pizza by its id
   * @param id
   * @returns {Observable<Pizza>}
   */
  getOne(id): Observable<Pizza> {
    return this.httpClient.get<Pizza>(this.url + id);
  }

  /**
   * Insert a new pizza in DB
   * @param new pizza
   * @returns if the pizza has been correctly inserted in DB
   */
  add(pizza){
    return this.httpClient.post(this.url, pizza);
  }

  /**
   * Modify a pizza already in DB
   * @param pizza
   * @returns if the pizza has been correctly modified in DB
   */
  modify(pizza) {
    return this.httpClient.put(this.url, pizza);
  }

  /**
   * Delete a pizza by its id
   * @param id
   * @returns if the pizza has been correctly deleted from DB
   */
  delete(id){
    return this.httpClient.delete(this.url + id);
  }
}
