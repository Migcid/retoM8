async function buscarCorreo(email){
    const client = await pool.connect();
    const respuesta= await client.query({
        text: 'select * from usuarios where email = $1',
        values: [email]
    });
    client.release();
    return respuesta.rows

}

module.exports={buscarCorreo}