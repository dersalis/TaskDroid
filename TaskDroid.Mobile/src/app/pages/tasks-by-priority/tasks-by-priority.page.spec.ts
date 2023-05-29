import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksByPriorityPage } from './tasks-by-priority.page';

describe('TasksByPriorityPage', () => {
  let component: TasksByPriorityPage;
  let fixture: ComponentFixture<TasksByPriorityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TasksByPriorityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
