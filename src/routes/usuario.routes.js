import { Router } from 'express';

const router = Router();
import  * as usuarioCtrl from '../controllers/usuario.controller'

router.get('/', usuarioCtrl.getUsuarios)
router.post('/validar', usuarioCtrl.getValidar)
router.post('/', usuarioCtrl.crearUsuario)
router.put('/:id', usuarioCtrl.updateUsuario)
router.delete('/:id', usuarioCtrl.deleteUsuario)

export default router;