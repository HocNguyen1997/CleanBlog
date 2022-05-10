const db = require('../../config/configDB');

const getUser = ()=>{
    return new Promise((resolve, reject) =>{
        let sql = `SELECT * from user`;
        db.query(sql,(error, results) =>{
            if(error) throw reject(error)
            resolve(results);
        })
    })
}

const register = (lastName, firstName, addRess, city)=>{
    return new Promise((resolve, reject)=>{
        let sql = `INSERT INTO user(LastName, FirstName, Address, City)
        VALUES ('${lastName}', '${firstName}', '${addRess}', '${city}');`
        db.query(sql, (error, results)=>{
            if(error) throw reject(error)
            resolve(results);
        })
    })
}
module.exports = {
    getUser,
    register
}