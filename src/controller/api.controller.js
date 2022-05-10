const UserService = require('../servives/api.services');

const getUser = async (req, res)=>{
    try{
        let getUser = await UserService.getUser();
        res.status(200).json(getUser);
        console.log(getUser);
    } catch(e){
        console.log(e.message);
        res.status(500);
    }
}
const register = async (req, res) =>{
    try{
        let lastName = req.body.LastName;
        let firstName = req.body.FirstName;
        let addRess= req.body.Address;
        let city = req.body.City;
        let register = await UserService.register(lastName, firstName, addRess, city);
        res.status(200).json('Dang Ky Thanh Cong')
    } catch(e){
        console.log(e.message);
        res.status(500);
    }
}
module.exports = {
    getUser,
    register
}