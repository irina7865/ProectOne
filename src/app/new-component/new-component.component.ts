import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
 age = 'age : 15';
  name = 'namne : irina';
  info = 'i do volleyball, aerobics.'; 
  sport = 'I lead an active lifestyle';
}
