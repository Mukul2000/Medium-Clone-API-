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
        if(tagList) article.tagList = tagList;

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
async function deleteArticle(slug, email) {
    const user = await User.findOne({ email: email });
    const article = await Article.findOne({ slug: slug, author: user._id });
    console.log(article);
    console.log(user);
    if (article === null) throw 'This user has no article with this slug';

    article.remove();
}

//String String String String String[]
async function updateArticle(slug, title, description, body, tags, email) {
    const user = await User.findOne({email: email}); //get user which requested this update
    const article = await Article.findOne({slug: slug}); //get article by slug
    if(article === null) throw 'No such article';

    const id1 = String(user._id);
    const id2 = String(article.author);

    if(id1 !== id2) throw 'This user has not authored this article';

    if(title) 
        article.slug = slugify(title);
    if(description) 
        article.description = description;
    if(body) 
        article.body = body;
    
    (await article).save();
    return article;
 }


async function getAllArticles() {
    const articles = await Article.find({});
    for(i = 0; i < articles.length; i++) {
        const full_author = await User.findById(articles[i].author);
        articles[i].author = full_author;
    }
    return articles;
}

//Personalised feed, need the email
//String
async function getFeedArticles(email) {

}

//String
async function getArticleBySlug(slug) {
    const article = await Article.findOne({ slug: slug });
    // console.log(article);
    if (article === null) throw 'No article found!';
    return article;
}


module.exports = { createArticle, deleteArticle, updateArticle, 
    getAllArticles, getFeedArticles, getArticleBySlug };