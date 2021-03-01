const Article = require("../schemas/Article");
const User = require("../schemas/User");
const slugify = require('../utils/stringutils');

//String String String String[]
async function createArticle(title, description, body, tagList, user_email) {
    //VALIDATE
    if (!title) throw 'Article title absent';
    if (!description) throw 'Article description absent';
    if (!body) throw 'Article body absent';

    try {
        //create article 
        let article = new Article({
            title: title,
            description: description,
            body: body
        });
        // if(tagList) article.tagList = tagList;

        //Check if the author exists
        const user = await User.findOne({ email: user_email });
        if (!user) throw 'User does not exist';
        article.author = user;
        article.slug = slugify(title);

        // console.log(article);
        article.save();
        return article;
    }
    catch (e) {
        throw e;
    }


}

//String
async function deleteArticle(slug) { }

//String String String String String[]
async function updateArticle(slug, title, description, body, tags) { }


async function getAllArticles() {

}

//Personalised feed, need the email
//String
async function getFeedArticles(email) {

}

//String
async function getArticleBySlug(slug) { }


module.exports = { createArticle, deleteArticle, updateArticle, getAllArticles, getFeedArticles, getArticleBySlug };