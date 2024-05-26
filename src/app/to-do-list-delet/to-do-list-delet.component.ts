import { Component } from '@angular/core';
import { ListAdd } from '../Massiv/item' ;
import { NgFor,NgClass } from '@angular/common'

@Component({
  selector: 'app-to-do-list-delet',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './to-do-list-delet.component.html',
  styleUrl: './to-do-list-delet.component.css'
})
export class ToDoListDeletComponent {
  array = ListAdd
  moveTwo(id: number): void
   { this.array.forEach((item, index) => 
    { if (item.id === id) { 
      this.array.splice(index, 1); }})
    ; }
    
}
