const { reject } = require('bcrypt/promises');
const db = require('../../config/configDB');

const checkLogin = (userName, passWord)=>{
    return new Promise((resolve, reject)=>{
        let sql = `SELECT * from users where userName = '${userName}'`;
        db.query(sql,(error, results) =>{
            if(error) throw reject(error)
            resolve(results);
        })
    })
}

const checkRegister = (userName)=>{
    return new Promise((resolve, reject)=>{
        let sql = `SELECT * from users where userName = '${userName}'`;
        db.query(sql, (error, results)=>{
            if(error) throw reject(error)
            resolve(results);
        })
    })
}

const registerAccount = (userName, passWord)=>{
    return new Promise((resolve, reject)=>{
        let sql = `INSERT INTO users (userName,passWord) VALUES ('${userName}','${passWord}')`;
        db.query(sql, (error, results)=>{
            if(error) throw reject(error)
            resolve(results);
        })
    })
}

module.exports = {
    checkLogin,
    checkRegister,
    registerAccount
}