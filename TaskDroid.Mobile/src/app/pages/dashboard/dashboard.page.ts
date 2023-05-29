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

  title: string = 'Zadania';

  tile: MatrixTileDto = {
    tileType: TaskPriority.q1,
    tileSize: MatrixTileSize.middle,
    quantity: 6,
  };

  tiles: MatrixTileDto[] = [
    {
      tileType: TaskPriority.q1,
      tileSize: MatrixTileSize.middle,
      quantity: 12,
    },
    {
      tileType: TaskPriority.q2,
      tileSize: MatrixTileSize.middle,
      quantity: 24,
    },
    {
      tileType: TaskPriority.q3,
      tileSize: MatrixTileSize.middle,
      quantity: 36,
    },
    {
      tileType: TaskPriority.q4,
      tileSize: MatrixTileSize.middle,
      quantity: 48,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
