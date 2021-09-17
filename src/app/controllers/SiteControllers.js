const Infomation = require('../model/Info');
const { mutipleMoongoToObject } = require('../../until/mogoose');

class SiteControllers {
    
    //GET /news
    index(req, res, next) {
        Infomation.find({})
            .then(info => {
                res.render('home', {info: mutipleMoongoToObject(info)});
            })
            .catch(next)
        // res.render('home')
    }

    //GET /news/:slug
    search(req, res) {
        res.send('Search page')
    }
}

module.exports = new SiteControllers;
