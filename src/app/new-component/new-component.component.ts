import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
  x = 'age : 15';
  z = 'namne : irina'
  r = 'i do volleyball, aerobics.' 
  i = 'i will lead as active a lifestyle as possible'
}
