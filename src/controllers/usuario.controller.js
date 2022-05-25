import { pool } from '../database'

export const getUsuarios = async (req,res)=>{
    try {
        const response = await pool.query('select *from fc_listar_usuario()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al listar Usuario');
    }
};

export const getValidar = async (req,res)=>{
    try {
        const {username} = req.body;
        await pool.query('select fc_validar_usuario2($1)',[username]);
        return res.status(200).json({
            message: 'Usuario validado correctamente...!'
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al validar Usuario');
    }
};

export const crearUsuario = async (req,res)=>{
    try {
        const {username, password, idpersona, idrol} = req.body;
        await pool.query('select from fc_create_usuario($1, $2, $3, $4)',[username, password, idpersona, idrol]);
        return res.status(200).json({
            message: 'Usuario resgistrado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar Usuario');
    }
};

export const updateUsuario = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {username, password, idpersona, idrol} = req.body;
        await pool.query('select fc_update_usuario($1, $2, $3, $4, $5)',[username, password, idpersona, idrol, id]);
        return res.status(200).json({
            message: 'Usuario actualizado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al actualizar Usuario');
    }
};

export const deleteUsuario = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select fc_delete_usuario($1)',[id]);
        return res.status(200).json({
            message: 'Usuario eliminado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar Usuario');
    }
};