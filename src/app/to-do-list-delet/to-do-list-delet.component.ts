import { Component } from '@angular/core';
import { ListAdd } from '../Massiv/item' ;
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-to-do-list-delet',
  standalone: true,
  imports: [NgFor],
  templateUrl: './to-do-list-delet.component.html',
  styleUrl: './to-do-list-delet.component.css'
})
export class ToDoListDeletComponent {
  ListAdd = ListAdd
}
