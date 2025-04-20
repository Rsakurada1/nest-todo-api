import { Injectable } from '@nestjs/common';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  private idCounter = 1;

  findAll(): Task[] {
    return this.tasks;
  }

  create(title: string): Task {
    const task: Task = {
      id: this.idCounter++,
      title,
      completed: false,
    };
    this.tasks.push(task);
    return task;
  }

  update(id: number, title: string, completed: boolean): Task | undefined {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.title = title;
      task.completed = completed;
    }
    return task;
  }

  delete(id: number): boolean {
    const index = this.tasks.findIndex((t) => t.id === id);
    if (index >= 0) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }
}
