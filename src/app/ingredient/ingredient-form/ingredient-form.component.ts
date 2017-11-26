import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredientService } from '../../service/ingredient.service';
import { Router } from '@angular/router';
import { Ingredient } from '../../model/ingredient';
import { ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})

export class IngredientFormComponent implements OnInit {
  private form: FormGroup;
  private ingredient: Ingredient;

  constructor(private route: ActivatedRoute, private ingredientService : IngredientService, private router: Router) { }

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
      weight: new FormControl('', [Validators.minLength(2), Validators.maxLength(3), Validators.required]),
      price: new FormControl('', [Validators.minLength(2), Validators.maxLength(3), Validators.required])
    })

    /**
     * If an id has been received it get all the details
     */
    if(id) {
      this.ingredientService.getOne(id).subscribe((data) => {
        this.form.patchValue(data);
      })
    }
  }

  /*
   * Add the received ingredient if new one
   * Update the received ingredient if already in DB
   */
  onSubmit(){
    if(this.form.value._id){
      this.ingredientService.modify(this.form.value).subscribe(() => {
        this.router.navigate(['ingredient/list']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.ingredientService.add(this.form.value).subscribe(() => {
        this.router.navigate(['ingredient/list']);
      }, (error) => {
        console.log(error);
      });
    }
  }
}
