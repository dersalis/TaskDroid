import DashboardDto from 'src/app/shared/dtos/dashboardDto';
import { DashboardService } from './../../services/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';
import { MatrixTileDto } from 'src/app/shared/dtos/matrixTileDto';
import { MatrixTileSize } from 'src/app/shared/enums/matrixTileSize';
import { TaskPriority } from 'src/app/shared/enums/taskPriority';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public title: string = 'Zadania';

  public dashboardData: DashboardDto | null = null;


  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardData = this.dashboardService.get();
    console.log('dashboardData: ', this.dashboardData);
  }

}
