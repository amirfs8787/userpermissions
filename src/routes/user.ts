import express from 'express';
import { actionValidation } from '../validations';

const router = express.Router();

router.get('/:internalId', async (req, res) => {
  //getUser
  res.send('test')
})

router.patch('/:internalId', actionValidation, async (req, res) => {
  //updateUserRole
  console.log('req.body', req.body);
  const permissionsToUpdate = req.body;
  console.log('permissionstoupdate', permissionsToUpdate);

  res.send('About  ')
})

export { router };