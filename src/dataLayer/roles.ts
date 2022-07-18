
import { IRole, rolesSchema } from './models/roles';
import { model } from 'mongoose';
import { permissions } from '../types/roles';

const Role = model<IRole>('Role', rolesSchema);

const createRole = async (role: IRole) => {
    console.log('***role', role)
    return await Role.create(role)
};

const updateRole = async (role: string, permissions: permissions) => await Role.findOneAndUpdate({role}, {permissions}, {new: true});

const deleteRole = async (role: string) => await Role.create(role);

export { createRole, updateRole, deleteRole };
