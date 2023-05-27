import { Component } from '@angular/core';
import { MatrixTileDto } from '../shared/dtos/matrixTileDto';
import { MatrixTileType } from '../shared/enums/matrixTileType';
import { MatrixTileSize } from '../shared/enums/matrixTileSize';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title: string = 'Zadania';

  tile: MatrixTileDto = {
    tileType: MatrixTileType.q1,
    tileSize: MatrixTileSize.middle,
    quantity: 6,
  };

  tiles: MatrixTileDto[] = [
    {
      tileType: MatrixTileType.q1,
      tileSize: MatrixTileSize.middle,
      quantity: 12,
    },
    {
      tileType: MatrixTileType.q2,
      tileSize: MatrixTileSize.middle,
      quantity: 24,
    },
    {
      tileType: MatrixTileType.q3,
      tileSize: MatrixTileSize.middle,
      quantity: 36,
    },
    {
      tileType: MatrixTileType.q4,
      tileSize: MatrixTileSize.middle,
      quantity: 48,
    }
  ];

  constructor() {}

}
