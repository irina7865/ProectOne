import { Component, ElementRef, ViewChild} from '@angular/core';
import { ListAdd } from '../Massiv/item';

@Component({
  selector: 'app-to-do-list-add',
  standalone: true,
  imports: [],
  templateUrl: './to-do-list-add.component.html',
  styleUrl: './to-do-list-add.component.css'
})
export class ToDoListAddComponent {
  
  @ViewChild("InputList") todoInputValue: ElementRef<HTMLInputElement> = null! ;
  constructor() {}

 moveOne(e:string):void{
  
  if (e.trim() !== "") {
    const date = new Date() 
    const ms = date.getTime()
    const NewItems = {id: ms , name: e , YorN: false}
    ListAdd.push(NewItems);};

    this.todoInputValue.nativeElement.value = "";
    
  }
}
