import mongoose from 'mongoose';
import { COLLECTION } from '../types/collection.types';

const Schema = mongoose.Schema;

export const UsersModel = mongoose.model(
  COLLECTION.users,
  new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
  }),
);
