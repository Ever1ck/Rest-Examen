import express from "express";
import morgan from "morgan";

import postRoutes from  './routes/post.routes'
import personaRoutes from  './routes/persona.routes'
import rolRoutes from  './routes/rol.routes'
import usuarioRoutes from  './routes/usuario.routes'

const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Bienvenido a Node Js ...!');
});

app.use('/api/auth/post', postRoutes);

app.use('/api/auth/persona', personaRoutes);

app.use('/api/auth/rol', rolRoutes);

app.use('/api/auth/usuario', usuarioRoutes);

export default app;