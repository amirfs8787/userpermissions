
import { IUser, userSchema } from './models/user';
import { model, ObjectId } from 'mongoose';
import { getRole } from './roles';
import { role, userFromDB } from '../types/roles';

const User = model<IUser>('User', userSchema);

const fetchUser = async (internalId: string) => {
    const user: userFromDB | null = await User.findOne({ internalId }).populate('role');
    return user;
}

const changeUserRole = async (internalId: string, role: role) => {
    let roleFromDB = await getRole(role);
    if (!roleFromDB) {
        throw new Error('No such role');
    }
    const updatedUser = await User.findOneAndUpdate({ internalId }, { role: roleFromDB._id }, { new: true })
    return updatedUser;
};


export { fetchUser, changeUserRole };