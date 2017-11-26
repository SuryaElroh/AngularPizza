export class Contact {
  _id: number;
  name: string;
  lastname: string;
  phone: string;
  adress: string;

  constructor (name, lastname, phone, adress) {
    this.name = name;
    this.lastname = lastname;
    this.phone = phone;
    this.adress = adress;
  }
}
