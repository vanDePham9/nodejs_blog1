const SiteControllers = require('../app/controllers/SiteControllers');
const newsRouter = require('./news')
const infoRouter = require('./info')
const siteRouter = require('./site')
const managerRouter = require('./manager')

function route(app) {
    
      
    app.use('/news', newsRouter)
    app.use('/info', infoRouter)
    app.use('/manager', managerRouter)

    app.use('/', siteRouter )
      
}

module.exports = route;
