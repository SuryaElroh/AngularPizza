import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../../model/pizza';
import { PizzaService } from '../../service/pizza.service'
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-details-pizza',
  templateUrl: './details-pizza.component.html',
  styleUrls: ['./details-pizza.component.css']
})
export class DetailsPizzaComponent implements OnInit {
  private pizza:Pizza;

  constructor(private route: ActivatedRoute, private pizzaService: PizzaService, private router: Router) { }

  ngOnInit() {
    /**
     * Received the pizza id passed in the url
     */
    let id = this.route.snapshot.params['id'];

    /**
     * Get all the details for the received id
     */
    this.pizzaService.getOne(id).subscribe((data) => {
      this.pizza = data;
    })
  }

  /**
   * Delete the pizza that has the given id
   * Then redirect to the pizza list page
   * @param id
   * @return if the action has been correctly done
   */
  delete(id) {
    console.log(id);
    this.pizzaService.delete(id).subscribe(data => {
      console.log(data);
      this.router.navigate(['pizza/list']);
    });
  }
}
