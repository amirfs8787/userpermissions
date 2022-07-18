import { fetchUserRole } from './dataLayer/users'

const permissions = {
    create: ['admin'],
    update: ['admin', 'client'],
    delete: ['admin']
}


const actions = {
    POST: 'create',
    PATCH: 'update',
    DELETE: 'delete'
}

const userIsAllowedToPerformAction = async (internalId: string, action: string) => {
    const userRole = await fetchUserRole(internalId);
    
    if(!userRole) {
        return false;
    }
    const allowedRoles = permissions[action as keyof typeof permissions];
    return allowedRoles.find(role => role === userRole.role);

}



const actionValidation = async (req: any, res: any, next: any) => {
    const action = actions[req.method as keyof typeof actions];
    console.log('action', action);
    
    const userIsAllowed = await userIsAllowedToPerformAction(req.user.userId, action);
    console.log('userisallowed', userIsAllowed)
    if(!userIsAllowed) {
      res.status(403).send(`You are not allowed to ${action} a role`);
      return;
    }
    next();
  }

export { userIsAllowedToPerformAction, actionValidation };