import { COLLECTION } from '../types/collection.types';
import { Document, model, Model, Schema } from 'mongoose';

export interface IUsersModel extends Document {
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UsersModel: Model<IUsersModel> = model(
  COLLECTION.users,
  UserSchema,
);
