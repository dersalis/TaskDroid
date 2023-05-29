import { Injectable } from '@angular/core';
import type Task from '../../models/task'
import { tasks } from '../../data/tasks'
import DashboardDto from 'src/app/shared/dtos/dashboardDto';
import { TaskPriority } from 'src/app/shared/enums/taskPriority';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  private getTasks(): Task[] {
    return tasks;
  }

  private getQuantity(priority: TaskPriority): number {
    return (this.getTasks().filter(task => {return task.priority === priority})).length;
  }

  public get(): DashboardDto {
    return {
      matrixTiles: [
        {
          tileType: TaskPriority.q1,
          tileSize: 2,
          quantity: this.getQuantity(TaskPriority.q1)
        },
        {
          tileType: TaskPriority.q2,
          tileSize: 2,
          quantity: this.getQuantity(TaskPriority.q2)
        },
        {
          tileType: TaskPriority.q3,
          tileSize: 2,
          quantity: this.getQuantity(TaskPriority.q3)
        },
        {
          tileType: TaskPriority.q4,
          tileSize: 2,
          quantity: this.getQuantity(TaskPriority.q4)
        }
      ],
    }
  }
}


