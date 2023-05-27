import { Component, Input, OnInit } from '@angular/core';
import { MatrixTileDto } from '../../dtos/matrixTileDto';
import { MatrixTileSize } from '../../enums/matrixTileSize';

@Component({
  selector: 'app-matrix-tile',
  templateUrl: './matrix-tile.component.html',
  styleUrls: ['./matrix-tile.component.scss'],
})
export class MatrixTileComponent  implements OnInit {
  @Input() content: MatrixTileDto | null = null;
  @Input() size: MatrixTileSize = MatrixTileSize.middle;

  constructor() { }

  ngOnInit() {}

}
