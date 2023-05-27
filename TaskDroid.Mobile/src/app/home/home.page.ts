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

  title: string = 'Tasks';
  tile: MatrixTileDto = {
    title: 'Tytuł 1',
    subTitle: 'PodTytuł 1',
    desctiption: 'Opis',
    tileType: MatrixTileType.q1,
    tileSize: MatrixTileSize.middle,
    quantity: 6,
  };

  constructor() {}

}
