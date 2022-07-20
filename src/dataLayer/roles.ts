
import { IRole, rolesSchema } from './models/roles';
import { model } from 'mongoose';
import { permissions, role } from '../types/roles';

const Role = model<IRole>('Role', rolesSchema);

const createRole = async (role: IRole) => await Role.create(role);

const getRole = async (role: string) => Role.findOne({ role });

const updateRole = async (role: string, permissions: permissions) => await Role.findOneAndUpdate({ role }, { permissions }, { new: true });

const deleteRole = async (role: string) => await Role.deleteOne({ role });

export { createRole, getRole, updateRole, deleteRole };
