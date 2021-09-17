const Infomation = require('../model/Info');
const { mongooseToObject } = require('../../until/mogoose');

class InfoControllers {
    
    //GET /info/:slug
    showDetail(req, res, next) {
        Infomation.findOne({ slug: req.params.slug })
            .then(info => {
                res.render('info/showDetail', {info: mongooseToObject(info)});
            })
            .catch(next);
    }

    //GET /info/create
    create(req, res, next) {
        res.render('info/create');
    }

    //POST /info/store
    store(req, res, next) {
        const small = new Infomation(req.body);
        small.save()
            .then(() => res.redirect('/info/create'))
            .catch(next)
        
    }

    //GET /info/:id/update

    update(req, res, next) {
        Infomation.findById(req.params.id)
            .then(info => res.render('info/update', {info: mongooseToObject(info)}))
            .catch(next)
        
    }

    //PUT /info/:id
    updateInDb(req, res, next) {
        Infomation.updateOne({ _id: req.body.id }, req.body)
            .then(() => res.redirect('/manager/players'))
            .catch(next);
    }
}

module.exports = new InfoControllers;
