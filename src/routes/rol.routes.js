import { Router } from 'express';

const router = Router();
import  * as postCtrl from '../controllers/rol.controller'

router.get('/', postCtrl.getRols)
router.get('/:id', postCtrl.getRolId)
router.post('/', postCtrl.crearRol)
router.put('/:id', postCtrl.updateRol)
router.delete('/:id', postCtrl.deleteRol)

export default router;