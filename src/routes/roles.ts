import express from 'express';
import { validateRole, isAdmin } from '../validations';
import { getRole, createRole, updateRole, deleteRole } from '../dataLayer/roles';

const router = express.Router();


router.get('/:roleType', isAdmin, async (req, res) => {
  let roleFromDB;
  try {
    roleFromDB = await getRole(req.params.roleType);

  } catch (err) {
    //Todo: send status code based on error type 
    res.send('Error getting role')
  }

  res.json({ data: roleFromDB })
})

router.post('/', isAdmin, async (req, res) => {
  const roleToAdd = req.body;
  validateRole(roleToAdd, res)
  let createdRole;
  try {
    createdRole = await createRole(roleToAdd);

  } catch (err) {
    //Todo: send status code based on error type 
    res.send('Error creating role')
  }

  res.json({ message: 'Successfully created role', data: createdRole })
})

router.patch('/', isAdmin, async (req, res) => {
  const roleToUpdate = req.body;
  validateRole(roleToUpdate, res)
  let updatedRole;
  try {
    updatedRole = await updateRole(roleToUpdate.role, roleToUpdate.permissions);

  } catch (err) {
    //Todo: send status code based on error type 
    res.send('Error updating role')
  }

  res.json({ message: 'Successfully updated role', data: updatedRole })
})

router.delete('/:roleType', isAdmin, async (req, res) => {

  try {
    await deleteRole(req.params.roleType);

  } catch (err) {
    //Todo: send status code based on error type 
    res.send('Error deleting role')
    return;
  }

  res.json({ message: 'Successfully deleted role' })
})

export { router as rolesRouter };