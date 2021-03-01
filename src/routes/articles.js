const express = require('express');
const authByToken = require('../middlewares/auth');
const controllers = require('../controllers/articles');
const route = express.Router();

// GET /api/articles get all articles
route.get("/", async (req, res) => {

});

//GET /api/articles feed
//Authentication required for feed
route.get('/feed', authByToken, async (req, res) => {

});

//GET /api/articles/:slug article by slug.
route.get('/:slug', async (req, res) => {

});

//POST /api/articles create a new article
route.post('/', authByToken, async (req, res) => {
    const title = req.body.article.title;
    const description = req.body.article.description;
    const body = req.body.article.body;
    const tagList = req.body.article.tagList;
    try {
        const article = await controllers.createArticle(title, description, body, tagList, req.user.email);
        res.status(201).json({ article });
    }
    catch (e) {
        res.status(422).json({
            errors: {
                body: ['Could not create article', e],
            }
        })
    }
});

//PATCH /api/articles/:slug Update article by slug
route.patch('/', async (req, res) => {

});


//DELETE /api/articles/:slug Delete article by slug
route.delete('/:slug', async (req, res) => {

})

module.exports = route;

