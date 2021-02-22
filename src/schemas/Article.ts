import mongoose from 'mongoose';
import userSchema from './User';

const articleSchema = new mongoose.Schema({
    slug: String,
    title: String,
    description: String,
    body: String,
    createdAt: Date,
    updatedAt: Date,
    // tagList: [], //relationship with tags
    // favorited: String, //relationship with user
    // favoritesCount: Number,
    author: userSchema,
});

const Article = mongoose.model("Article", articleSchema);

export default Article;