const Course = require('../models/course')

class MeController {

    courseShow(req, res, next){
        Course.find({}).lean()
            .then(courses => res.render('me/stored-course', { courses }))
            .catch(error => next(error));
    }
}

module.exports = new MeController