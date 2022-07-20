import express from 'express';
import { validateUserAction } from '../validations';

const router = express.Router();

router.get('/:orderId', async (req: any, res) => {
  validateUserAction('orders', 'view', req.app.locals.roleInformation.permissions, res);
  //perform relevant action
  //res.json({data: order})
  res.send('Successfully got order')

})

router.patch('/:orderId', async (req: any, res) => {
  validateUserAction('orders', 'update', req.app.locals.roleInformation.permissions, res);
  //perform relevant action
  //res.json({data: order})
  res.send('Successfully updated order')
})

export { router as ordersRouter };