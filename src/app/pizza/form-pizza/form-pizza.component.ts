import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Pizza} from "../../model/pizza";
import {ActivatedRoute, Router} from "@angular/router";
import {PizzaService} from "../../service/pizza.service";

@Component({
  selector: 'app-form-pizza',
  templateUrl: './form-pizza.component.html',
  styleUrls: ['./form-pizza.component.css']
})
export class FormPizzaComponent implements OnInit {
  private form: FormGroup;
  private pizza: Pizza;

  constructor(private route: ActivatedRoute, private router: Router, private pizzaService: PizzaService) {
  }

  ngOnInit() {
    /**
     * Received the id passed in the url
     */
    let id = this.route.snapshot.params['id'];

    /**
     * Create a new form that verifies data and matches it
     */
    this.form = new FormGroup({
      _id: new FormControl(id),
      name: new FormControl('', [Validators.minLength(2), Validators.maxLength(20), Validators.required]),
      description: new FormControl('', [Validators.minLength(3), Validators.required]),
      price: new FormControl('', [Validators.minLength(2), Validators.maxLength(3), Validators.required]),
      image: new FormControl('', [Validators.minLength(5), Validators.required])
    })

    /**
     * If an id has been received it get all the details
     */
    if (id) {
      this.pizzaService.getOne(id).subscribe((data) => {
        this.form.patchValue(data);
      })
    }
  }

  /*
   * Add the received pizza if new one
   * Update the received pizza if already in DB
   */
  onSubmit() {
    if (this.form.value._id) {
      this.pizzaService.modify(this.form.value).subscribe(() => {
        this.router.navigate(['pizza/list']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.pizzaService.add(this.form.value).subscribe(() => {
        this.router.navigate(['pizza/list']);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
