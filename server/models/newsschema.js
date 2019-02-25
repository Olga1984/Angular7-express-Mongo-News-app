const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    author: String,
    title: String,
    description: String,
    content: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
});
const NewsModel = mongoose.model('News', NewsSchema);
module.exports = NewsModel;
