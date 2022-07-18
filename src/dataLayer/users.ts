
import { IUser, userSchema } from './models/user';
import { model } from 'mongoose';

const User = model<IUser>('User', userSchema);

const fetchUserPermissions = async (internalId: string) => await User.findOne({internalId}).populate('role', 'permissions');

const fetchUserRole = async (internalId: string) => await User.findOne({internalId}).populate('role', 'role');

const changeUserRole = async (internalId: string, role: string) => await User.findOneAndUpdate({internalId},{role}, {new: true});


export { fetchUserPermissions, fetchUserRole, changeUserRole };