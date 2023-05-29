import { Component, Input, OnInit } from '@angular/core';
import { MatrixTileDto } from '../../dtos/matrixTileDto';
import { MatrixTileSize } from '../../enums/matrixTileSize';
import { TaskPriority } from '../../enums/taskPriority';
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

  getColor(tileType: TaskPriority): string {
    switch(tileType) {
      case TaskPriority.q1:
        return 'warning';
      case TaskPriority.q2:
        return 'danger';
      case TaskPriority.q3:
        return 'success';
      case TaskPriority.q4:
        return 'secondary';
    }

    return 'light';
  }

  getTitle(tileType: TaskPriority): string {
    switch(tileType) {
      case TaskPriority.q1:
        return 'Zrób';
      case TaskPriority.q2:
        return 'Odłóż';
      case TaskPriority.q3:
        return 'Deleguj';
      case TaskPriority.q4:
        return 'Eliminuj';
    }

    return '...';
  }

  getSubTitle(tileType: TaskPriority): string {
    switch(tileType) {
      case TaskPriority.q1:
        return 'Zrób to teraz';
      case TaskPriority.q2:
        return 'Zaplanuj kiedy to zrobic';
      case TaskPriority.q3:
        return 'Daj do zrobienia komuś';
      case TaskPriority.q4:
        return 'Zapomnij i unikaj';
    }

    return '...';
  }

  getDescription(tileType: TaskPriority): string {
    switch(tileType) {
      case TaskPriority.q1:
        return 'Działania, które wymagają natychmiastowej uwagi, np. nagłe problemy zdrowotne, kryzysy w firmie, itp.';
      case TaskPriority.q2:
        return 'Działania, które są ważne, ale nie wymagają natychmiastowej uwagi, np. planowanie długoterminowe, rozwijanie umiejętności, itp.';
      case TaskPriority.q3:
        return 'Działania, które nie są ważne, ale wymagają natychmiastowej uwagi, np. przeglądanie poczty elektronicznej, wypełnianie raportów, itp.';
      case TaskPriority.q4:
        return 'Działania, które nie są ani ważne, ani pilne, np. przeglądanie mediów społecznościowych, oglądanie telewizji, itp.';
    }

    return '...';
  }
}
