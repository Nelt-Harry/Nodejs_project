const Course = require('../models/course')

class CourseController {

    show(req, res, next){
        Course.findOne({slug: req.params.slug}).lean()
            .then(course => res.render('courses/show', { course }))
            .catch(next);
    }

    create(req, res, next){
        res.render("courses/create")
    }

    store(req, res, next){
        const location = new Course(req.body)
        location.save()

        res.render('home')
    }
}

module.exports = new CourseController