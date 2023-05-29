import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksByPriorityPage } from './tasks-by-priority.page';

const routes: Routes = [
  {
    path: '',
    component: TasksByPriorityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksByPriorityPageRoutingModule {}
