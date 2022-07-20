import express from 'express';
import { isAdmin } from '../validations';
import { fetchUser, changeUserRole } from '../dataLayer/users';

const router = express.Router();

router.get('/:internalId', isAdmin, async (req, res) => {
  const { internalId } = req.params;
  if (!internalId) {
    //Todo: also validate internalId format
    res.status(400).send(`Missing internalId`);
  }
  const user = await fetchUser(internalId);

  res.json({ user })
})

router.patch('/', isAdmin, async (req: any, res) => {
  //updateUserRole
  const { internalId, roleType } = req.body;
  if (!internalId || !roleType) {
    //Todo: also validate internalId and role format
    res.status(400).send(`Missing details to update`);
  }
  let user;
  try {
    user = await changeUserRole(internalId, roleType);
  } catch (err) {
    //Todo: send status based on error
    res.status(403).send('No such role');
    return
  }

  res.json({ message: 'Successfully changed user role', data: user })
})

export { router as usersRouter };