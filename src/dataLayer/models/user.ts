import { Schema, Types } from 'mongoose';

interface IUser {
  internalId: string;
  userName: string;
  password: string;
  fullName: string;
  role: Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  internalId: String,
  userName: String,
  password: String,
  fullName: String,
  role: { type: Schema.Types.ObjectId, ref: 'Role' }
});

export { IUser, userSchema };