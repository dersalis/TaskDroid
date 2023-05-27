import { MatrixTileSize } from "../enums/matrixTileSize";
import { MatrixTileType } from "../enums/matrixTileType";

export interface MatrixTileDto {
  title: string;
  subTitle: string;
  desctiption: string;
  quantity: number;
  tileType: MatrixTileType;
  tileSize: MatrixTileSize;
}
