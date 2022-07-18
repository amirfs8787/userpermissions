import { Schema } from 'mongoose';
import { role } from '../../types/roles'

interface IRole {
  role: role;
  permissions: string
}

const rolesSchema = new Schema<IRole>({
  role: String,
  permissions: String
});

export { IRole, rolesSchema };