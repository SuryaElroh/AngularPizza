/**
 * Define the model of the pizza object
 * It defines what attributes can have the object and the type of every attributes
 */
export class Pizza {
  _id: string;
  name: string;
  description: string;
  price: string;
  cDate: Date;
  mDate: Date;
  image: string;
  ingredients: any[];

  constructor (name, description, price, cDate, mDate, image, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.cDate = cDate;
    this.mDate = mDate;
    this.image = image;
    this.ingredients = ingredients;
  }
}
