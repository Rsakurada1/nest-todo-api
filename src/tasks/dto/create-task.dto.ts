// src/tasks/dto/create-task.dto.ts
import { IsString } from 'class-validator';

export class CreateTaskDto {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsString()
  title: string;
}
