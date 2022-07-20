import { fetchUser } from './dataLayer/users'

const getRoleOfRequestingUser = async (req: any, res: any, next: any) => {
    const user = await fetchUser(req.user.userId);
    console.log('***user in getroleofquestingursre', user)
    if (!user) {
        res.status(403).send(`User does not exist`);
        return;
    }
    req.app.locals.roleInformation = user.role;
    next();
}

const validateUserAction = (category: string, action: string, permissions: any, res: any) => {

    //didn't use array.includes in the interest of time cause I ran into some typing issues
    if (!permissions[category] || !permissions[category].find((userAllowedAction: string) => userAllowedAction == action)) {

        res.status(401).send(`Not allowed to ${action} ${category}`);
        return;
    }
    //Example response message: Not allowed to view orders
}


const isAdmin = (req, res, next) => {
    if (req.app.locals.roleInformation.role === 'admin') {
        next()
    } else {
        res.status(401).send(`You are not allowed to perform this action`);
    }
}



const validateRole = (role: string, res: any) => {
    console.log('Here the validation will occur for the format and content of the role')
    //checks the format and content of the role
    // if(!roleIsValidated) {
    //     res.status(400).send(`The role is in the wrong format`);
    //     return;
    //   }
}

export { getRoleOfRequestingUser, validateUserAction, isAdmin, validateRole };