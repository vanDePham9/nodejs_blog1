const Infomation = require('../model/Info');
const { mutipleMoongoToObject } = require('../../until/mogoose');

class ManagerControllers {
    
    //GET /manager/players
    showListPlayers(req, res, next) {
        Infomation.find({})
            .then(info => res.render('manager/players', {info: mutipleMoongoToObject(info)}))
            .catch(next)
        
    }

}

module.exports = new ManagerControllers;
