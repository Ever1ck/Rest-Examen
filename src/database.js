import { Pool } from "pg"

export const pool = new Pool({
    host:'ec2-34-197-84-74.compute-1.amazonaws.com',
    user:'uaxtgqoxpgwcvq',
    password:'e2cac99d6bf56c260e8e5b9515a35fa731a750ec1e3308ae776e464403cfe195',
    database:'d1j4m7599nfbnr',
    port: 5432,
    ssl:{rejectUnauthorized:false}
});