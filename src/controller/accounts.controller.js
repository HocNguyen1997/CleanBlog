const AccountsServices = require('../servives/accounts.sevices');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

const login = async (req, res, next)=>{
    try{
        let userName = req.body.userName;
        let passWord1 = req.body.passWord;   
        let checkLogin = await AccountsServices.checkLogin(userName);
        if(checkLogin.length == 0){
            return res.status(200).json('Wrong account!');
        }
        let bytes = crypto.AES.decrypt(checkLogin[0].passWord, 'mahoa'); //ma hoa trong DB
        let passWord = bytes.toString(crypto.enc.Utf8);
        if(passWord1 !== passWord){
            return res.status(200).json('The wrong password!');
        }
        let token = jwt.sign({user: checkLogin[0].userName}, 'jwt',{expiresIn:50});
        return res.status(200).json({
            message: 'Have successfully logged!',
            token: token
        })
    } catch(e){
        console.log(e.message);
        res.status(500).json(e.message);
    }
}

const register = async (req, res, next)=>{
    try{
        let userName = req.body.userName;
        let passWord1 = req.body.passWord;
        let passWord = crypto.AES.encrypt(passWord1, 'mahoa').toString();
        let checkRegister = await AccountsServices.checkRegister(userName);
        // console.log(checkRegister.length);
        if(checkRegister.length > 0){
            res.status(200).json('Account already exists');
        } else {
            let item = await AccountsServices.registerAccount(userName, passWord);
            console.log(item)
            res.status(200).json('Have successfully created the account'); 
        }
    }catch(e){
        console.log(e.message + 'error 500');
         res.status(500).json(e.message);
    }
}

module.exports = {
    login,
    register
}