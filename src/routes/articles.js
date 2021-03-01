const express = require('express');
const authByToken = require('../middlewares/auth');
const controllers = require('../controllers/articles');
const { decode } = require('jsonwebtoken');
const route = express.Router();

// GET /api/articles get all articles
route.get("/", async (req, res) => {
    try {
        const articles = await controllers.getAllArticles();
        res.status(200).json(
            [articles]
        );
    }
    catch(e) {
        res.status(401).json({
            body: ["Could not fetch articles at this time", e],
        });
    }
});

//GET /api/articles feed
//Authentication required for feed
route.get('/feed', authByToken, async (req, res) => {

});

//GET /api/articles/:slug article by slug.
route.get('/:slug', async (req, res) => {
    try {
        const article = await controllers.getArticleBySlug(req.params.slug);
        res.status(201).json({article});
    }
    catch (e) {
        res.status(422).json({
            errors: {
                body: ['Could not find article', e],
            }
        })
    }
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
        });
    }
});

//PATCH /api/articles/:slug Update article by slug
route.patch('/', async (req, res) => {

});


//DELETE /api/articles/:slug Delete article by slug
route.delete('/:slug', authByToken, async (req, res) => {
    console.log(req.params.slug);
    try {
        const article = await controllers.deleteArticle(req.params.slug, req.user.email);
        res.status(200).json({
            "body": "Deleted successfully",
            article,
        });
    }
    catch(e) {
        res.status(400).json({
            "errors": ["Unsuccesful delete", e],
        });
    }
})

module.exports = route;

