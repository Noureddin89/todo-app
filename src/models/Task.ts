export type TaskStatus = 'pending' | 'completed' | 'cancelled';

export interface Task {
  id: string;
  title: string;
  dueDate?: Date | null;
  status: TaskStatus;
  cancelReason?: string;
}
