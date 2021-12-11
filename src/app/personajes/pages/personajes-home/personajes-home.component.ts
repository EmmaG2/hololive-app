import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes-home',
  templateUrl: './personajes-home.component.html',
  styles: [
    `
      .container {
        margin: 10px;
      }
    `,
  ],
})
export class PersonajesHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
