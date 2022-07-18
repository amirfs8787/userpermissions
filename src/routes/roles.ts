import express from 'express';
import { actionValidation } from '../validations';
import { createRole } from '../dataLayer/roles';
import { permissions, role } from '../types/roles';

const router = express.Router();

router.get('/', async (req, res) => {
  //get all roles
  res.send('  home page')
})

// define the about route
router.post('/', actionValidation, async (req, res) => {
  console.log('***got to POST')

  const {roleType, permissions}: { roleType: role; permissions: permissions } = req.body;
  const roleToCreate = {role: roleType, permissions: JSON.stringify(permissions)}
  
  console.log('post body', roleToCreate)
  let createdRole = null;
  try {
    createdRole = await createRole(roleToCreate);

  } catch(err) {
    console.log('error creating role')
  }
  if(createdRole) {
    createdRole.permissions = JSON.parse(createdRole.permissions)

  }

  res.json({message: 'Successfully created role', data: createdRole})
})
router.patch('/:internalId', actionValidation, async (req, res) => {

  res.send('About  ')
})
router.delete('/:internalId', actionValidation, async (req, res) => {

  res.send('About  ')
})
export { router as rolesRouter };