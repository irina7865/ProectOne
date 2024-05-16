import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListDeletComponent } from './to-do-list-delet.component';

describe('ToDoListDeletComponent', () => {
  let component: ToDoListDeletComponent;
  let fixture: ComponentFixture<ToDoListDeletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListDeletComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoListDeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
