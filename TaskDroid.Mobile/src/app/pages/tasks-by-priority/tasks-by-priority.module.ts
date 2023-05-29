import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksByPriorityPageRoutingModule } from './tasks-by-priority-routing.module';

import { TasksByPriorityPage } from './tasks-by-priority.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksByPriorityPageRoutingModule
  ],
  declarations: [TasksByPriorityPage]
})
export class TasksByPriorityPageModule {}
