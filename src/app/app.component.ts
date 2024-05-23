import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './new-component/new-component.component'
import { ToDoListAddComponent } from './to-do-list-add/to-do-list-add.component'
import { ToDoListDeletComponent} from './to-do-list-delet/to-do-list-delet.component'
import { NgFor } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NewComponentComponent,NgFor,ToDoListDeletComponent,ToDoListAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TO DO LIST';
}
