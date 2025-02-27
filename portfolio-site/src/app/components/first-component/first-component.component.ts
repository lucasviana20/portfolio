import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component', //nome da tag do componente
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css' //style exclusivo do componente
})
export class FirstComponentComponent {

  name: String = 'Lucas';
  age: Number = 20;
  job = "Desenvolvedor De Software";

}
