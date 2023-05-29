import { TaskPriority } from "../shared/enums/taskPriority";

export default interface Task {
  id: number;
  title: string;
  description: string;
  scheduledDate: Date | null;
  finishDate: Date | null;
  priority: TaskPriority;
  flag: boolean;
  listsId: number[];
  tagsId: number[];
}
