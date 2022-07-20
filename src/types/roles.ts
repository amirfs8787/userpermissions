import { IUser } from '../dataLayer/models/user';

type permissions = {
  orders: actions[],
  invoices: actions[],
  users: actions[]
}

type actions = 'view' | 'update' | 'create' | 'delete';

type role = 'admin' | 'supplier' | 'client';

type roleWithoutObjectId = Omit<IUser, "role">;

type userFromDB = roleWithoutObjectId & {
  role: {
    role: role,
    permissions: permissions
  };
};

export { permissions, actions, role, userFromDB }