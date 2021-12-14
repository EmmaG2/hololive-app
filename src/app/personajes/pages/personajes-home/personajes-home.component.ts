import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes-home',
  templateUrl: './personajes-home.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
      button:hover {
        background-color: #db417c86;
      }
    `,
  ],
})
export class PersonajesHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
