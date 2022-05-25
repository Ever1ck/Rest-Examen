import { Router } from 'express';

const router = Router();
import  * as postCtrl from '../controllers/persona.controller'

router.get('/', postCtrl.getPersonas)
router.get('/:id', postCtrl.getPersonaId)
router.post('/', postCtrl.crearPersona)
router.put('/:id', postCtrl.updatePersona)
router.delete('/:id', postCtrl.deletePersona)

export default router;