const User = require('./User');
const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    slug: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    body: {
        type: String,
        required: true,
    },
    createdAt: Date,
    updatedAt: Date,
    tagList: [], //relationship with tags
    // favorited: String, //relationship with user
    // favoritesCount: Number,
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true,
    },
});

const Article = mongoose.model("Article", articleSchema);
module.exports = Article;