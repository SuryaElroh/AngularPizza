import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private socket = io.connect('https://pizza-project-cloned-suryae.c9users.io');

  constructor(private router: Router) { }

  ngOnInit() {
    /*
     * Permit to listen to the server in order to inform user if there is some news
     */
    this.socket.on('new pizza available', (data) => {
      console.log(data);
      alert('Une nouvelle pizza est disponible !!!');
    })

    this.socket.on('new ingredient toast', (data) => {
      console.log(data);
      alert('Un nouvel ingredient est disponible !!!');
    })

    /*
     * Redirect directly to the pizza list
     */
    this.router.navigate(['pizza/list']);
  }
}
