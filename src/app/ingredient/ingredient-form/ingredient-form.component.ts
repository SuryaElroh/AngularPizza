import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../service/contact.service';
import { Router } from '@angular/router';
import { Contact } from '../../model/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  private form: FormGroup;
  private contact: Contact;

  constructor(private route: ActivatedRoute, private contactService : ContactService, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contact = this.contactService.getOne(id);

    this.form = new FormGroup({
      _id: new FormControl(id),
      name: new FormControl(this.contact.name, [Validators.minLength(2), Validators.required]),
      lastname: new FormControl(this.contact.lastname, [Validators.minLength(2), Validators.required]),
      phone: new FormControl(this.contact.phone, Validators.minLength(10)),
      adress: new FormControl(this.contact.adress, Validators.minLength(5))
    })
  }

  onSubmit(){
    this.contactService.add(this.form.value);
    this.router.navigate(['contact-list']);
  }
}
