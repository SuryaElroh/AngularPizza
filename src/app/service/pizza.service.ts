import { Injectable } from '@angular/core';
import { Pizza } from '../model/pizza';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class PizzaService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Pizza[]>{
    return this.httpClient.get('https://pizza-project-suryae.c9users.io/pizza');
  }

  // Mettre .subscribbe dans le component
}
