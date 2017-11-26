import { Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredient';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class IngredientService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Ingredient[]>{
    return this.httpClient.get('https://pizza-project-suryae.c9users.io/ingredient');
  }
}
