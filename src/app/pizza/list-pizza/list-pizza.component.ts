import { Component, OnInit } from '@angular/core';
import {Pizza} from "../../model/pizza";
import {PizzaService} from "../../service/pizza.service";
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.css']
})
export class ListPizzaComponent implements OnInit {
  private pizzas: Pizza[];
  private socket = io.connect('https://pizza-project-cloned-suryae.c9users.io');
  private success = false;

  constructor(private pizzaService : PizzaService, private router: Router) { }

  ngOnInit() {
    /**
     * Listen to the server waiting for a new pizza in DB
     * Using socket.io
     */
    this.socket.on('new pizza available', (data) => {
      console.log(data);
      this.pizzas.push(data);
      this.success = true;
    })

    /**
     * Listen to the server waiting for a modified pizza
     * Using socket.io
     */
    this.socket.on('pizza modified', (data) => {
      console.log(data);
      alert('Une pizza a été modifiée. Veuillez recharger pour voir les modifications.');
    })

    /**
     * Listen to the server waiting for a removed pizza
     * Using socket.io
     */
    this.socket.on('pizza removed', (data) => {
      console.log(data);
      alert('Une pizza a été supprimée. Veuillez recharger pour voir les modifications.');
    })

    /**
     * Call the service get() that get all the pizza in DB in order to show them in the view
     */
    this.pizzaService.get().subscribe(data => this.pizzas = data);
  }
}
