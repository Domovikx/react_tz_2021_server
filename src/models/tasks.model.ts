import mongoose from 'mongoose';
import { COLLECTION } from '../types/collection.types';

const Schema = mongoose.Schema;

export const TasksModel = mongoose.model(
  COLLECTION.tasks,
  new Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
  }),
);

// TODO: https://uxcandy.com/~shapoval/test-task-backend/docs/v2.html
