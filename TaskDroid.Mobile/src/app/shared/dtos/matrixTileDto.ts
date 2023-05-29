import { MatrixTileSize } from "../enums/matrixTileSize";
import { TaskPriority } from "../enums/taskPriority";

export interface MatrixTileDto {
  quantity: number;
  tileType: TaskPriority;
  tileSize: MatrixTileSize;
}
