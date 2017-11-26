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
    let id = this.route.snapshot.params['id'];
    this.pizzaService.getOne(id).subscribe((data) => {
      console.log(data);
      this.pizza = data;
    })
  }

}
