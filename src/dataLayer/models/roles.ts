import { Schema } from 'mongoose';
import { role, permissions } from '../../types/roles'

interface IRole {
  role: role;
  permissions: permissions
}

const permissionsSchema = new Schema({
  orders: [String],
  invoices: [String],
  users: [String]
});

const rolesSchema = new Schema<IRole>({
  role: { type: String, unique: true },
  permissions: permissionsSchema
});

export { IRole, rolesSchema };