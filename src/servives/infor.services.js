const db = require('../../core/config/configDB');

const getInfor = ()=>{
    return new Promise((resolve, reject)=>{
        let sql = 'SELECT * from users';
        db.query(sql,(error, results) =>{
            if(error) throw reject(error)
            resolve(results);
        })
    })
}

module.exports = {
    getInfor
}