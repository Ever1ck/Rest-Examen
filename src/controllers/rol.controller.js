import { pool } from '../database'

export const getRols = async (req,res)=>{
    try {
        const response = await pool.query('select *from fc_listar_rol()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al listar Rol');
    }
};

export const getRolId = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select *from fc_listar_rol_id($1)',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Error al listar Rol');
    }
};

export const crearRol = async (req,res)=>{
    try {
        const {titulo, descripcion} = req.body;
        await pool.query('select from fc_create_rol($1, $2)',[nombre, estado]);
        return res.status(200).json({
            message: 'Rol resgistrado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al registrar Rol');
    }
};

export const updateRol = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        const {titulo, descripcion} = req.body;
        await pool.query('select fc_update_rol($1, $2, $3)',[nombre, estado, id]);
        return res.status(200).json({
            message: 'Rol actualizado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al actualizar Rol');
    }
};

export const deleteRol = async (req,res)=>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select fc_delete_rol($1)',[id]);
        return res.status(200).json({
            message: 'Rol eliminado correctamente...!'
        });
    } catch (e) {
        return res.status(500).json('Error al eliminar Rol');
    }
};