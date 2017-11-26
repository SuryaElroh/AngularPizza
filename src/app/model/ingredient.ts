export class Pizza {
  _id: string;
  name: string;
  description: string;
  price: string;
  cDate: string;
  mDate: string;
  image: string;
  ingredients: Ingredient[];

  constructor (name, description, price, cDate, mDate, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.cDate = cDate;
    this.mDate = mDate;
    this.image = image;
  }
}
