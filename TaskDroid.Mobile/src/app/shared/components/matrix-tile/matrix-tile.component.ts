import { Component, Input, OnInit } from '@angular/core';
import { MatrixTileDto } from '../../dtos/matrixTileDto';
import { MatrixTileSize } from '../../enums/matrixTileSize';
import { MatrixTileType } from '../../enums/matrixTileType';
// import { Device } from 'ionic-native';

@Component({
  selector: 'app-matrix-tile',
  templateUrl: './matrix-tile.component.html',
  styleUrls: ['./matrix-tile.component.scss'],
})
export class MatrixTileComponent  implements OnInit {
  @Input() content: MatrixTileDto | null = null;
  @Input() size: MatrixTileSize = MatrixTileSize.middle;

  constructor() { }

  ngOnInit() {
    // console.log('OS: ', Device.device.platform);
  }

  getColor(tileType: MatrixTileType): string {
    switch(tileType) {
      case MatrixTileType.q1:
        return 'warning';
      case MatrixTileType.q2:
        return 'danger';
      case MatrixTileType.q3:
        return 'success';
      case MatrixTileType.q4:
        return 'secondary';
    }

    return 'light';
  }

  getTitle(tileType: MatrixTileType): string {
    switch(tileType) {
      case MatrixTileType.q1:
        return 'Zrób';
      case MatrixTileType.q2:
        return 'Odłóż';
      case MatrixTileType.q3:
        return 'Deleguj';
      case MatrixTileType.q4:
        return 'Eliminuj';
    }

    return '...';
  }

  getSubTitle(tileType: MatrixTileType): string {
    switch(tileType) {
      case MatrixTileType.q1:
        return 'Zrób to teraz';
      case MatrixTileType.q2:
        return 'Zaplanuj kiedy to zrobic';
      case MatrixTileType.q3:
        return 'Daj do zrobienia komuś';
      case MatrixTileType.q4:
        return 'Zapomnij i unikaj';
    }

    return '...';
  }

  getDescription(tileType: MatrixTileType): string {
    switch(tileType) {
      case MatrixTileType.q1:
        return 'Działania, które wymagają natychmiastowej uwagi, np. nagłe problemy zdrowotne, kryzysy w firmie, itp.';
      case MatrixTileType.q2:
        return 'Działania, które są ważne, ale nie wymagają natychmiastowej uwagi, np. planowanie długoterminowe, rozwijanie umiejętności, itp.';
      case MatrixTileType.q3:
        return 'Działania, które nie są ważne, ale wymagają natychmiastowej uwagi, np. przeglądanie poczty elektronicznej, wypełnianie raportów, itp.';
      case MatrixTileType.q4:
        return 'Działania, które nie są ani ważne, ani pilne, np. przeglądanie mediów społecznościowych, oglądanie telewizji, itp.';
    }

    return '...';
  }
}
