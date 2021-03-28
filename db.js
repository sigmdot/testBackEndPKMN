const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url) {
    await db.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).catch(err=>{
        console.log('[error db]',err);
    }).then(()=>{
        db.connection.on('error',err=>{
            console.error(err);
        });
    });
    console.log('[DB] esta es conectada con éxito');
}

module.exports = connect;