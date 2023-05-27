import { MatrixTileSize } from "../enums/matrixTileSize";
import { MatrixTileType } from "../enums/matrixTileType";

export interface MatrixTileDto {
  quantity: number;
  tileType: MatrixTileType;
  tileSize: MatrixTileSize;
}
