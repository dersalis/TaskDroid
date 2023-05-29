import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskPriority } from 'src/app/shared/enums/taskPriority';

@Component({
  selector: 'app-tasks-by-priority',
  templateUrl: './tasks-by-priority.page.html',
  styleUrls: ['./tasks-by-priority.page.scss'],
})
export class TasksByPriorityPage implements OnInit {

  private priority: TaskPriority | null = null;

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('priorityId')) {
        return;
      }
      const priorityId: number = Number(paramMap.get('priorityId'));
      console.log('priorityId: ', priorityId);
      this.priority = priorityId as TaskPriority;
      console.log('priority: ', this.priority);
    });
  }

}
