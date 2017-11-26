/**
 * Define the model of the ingredient object
 * It defines what attributes can have the object and the type of every attributes
 */
export class Ingredient {
  _id: string;
  name: string;
  weight: string;
  price: string;

  constructor (name, weight, price) {
    this.name = name;
    this.weight = weight;
    this.price = price;
  }
}
