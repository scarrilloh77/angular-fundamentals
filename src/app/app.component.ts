import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Sebastian';
  age = 23;
  img = 'https://www.w3schools.com/howto/img_lights_wide.jpg';
  btnDisabled = true;
  person = {
    name: 'Sebastian',
    age: 23,
    avatar: 'https://www.w3schools.com/howto/img_lights_wide.jpg',
  };
}
