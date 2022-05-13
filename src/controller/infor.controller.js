const InforServices = require('../servives/infor.services');

const getInfor = async (req, res, next)=>{
    try{
        let getInfor = await InforServices.getInfor();
        res.status(200).json(getInfor);
    } catch (e){
        console.log(e.message);
        res.status(500); 
    }
}

module.exports = {
    getInfor
}