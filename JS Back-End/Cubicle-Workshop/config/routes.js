const cubeController = require('../controllers/cube');

module.exports = (app) => {
    app.get('/details/:id', cubeController.details)
    app.get('/about', cubeController.about);
    app.get('/not-found', cubeController.notFound);
    app.get('/create', cubeController.getCreate)
       .post(cubeController.postCreate);
    app.get('/', cubeController.index);
};