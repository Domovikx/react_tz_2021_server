import { COLLECTION } from '../types/collection.types';
import { Document, model, Model, Schema } from 'mongoose';

export interface ITasksModel extends Document {
  username: string;
  email: string;
  text: string;
  status: number;
}

const TasksSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true },
  status: { type: Number, required: true },
});

export const TasksModel: Model<ITasksModel> = model(
  COLLECTION.tasks,
  TasksSchema,
);
