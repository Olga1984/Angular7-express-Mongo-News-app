var express = require('express');
var router = express.Router();
var News = require('../models/newsschema');

//http://localhost:3000/api/news
router.get('/news', function (req, res, next) {
    News.find({}).then((news)=> {
        res.send(news);
    }).catch(next);
});

//http://localhost:3000/api/news/5c575767c1f92c1f54e783c2
router.get('/news/:id', function (req, res, next) {
    if (req.params.id === '0') {
        next('route');
    } else {
        next();
    }
}, function (req, res, next) {
    News.findOne({_id: req.params.id}).then(function(news){
        res.send(news).catch(next);
    });
});

//http://localhost:3000/api/news
router.post('/news', function (req, res, next) {
        News.create(req.body).then((news)=> {
        res.send(news);
    }).catch(next);
});

//http://localhost:3000/api/news/5c57576fc1f92c1f54e783c3
router.put('/news/:id', function (req, res, next) {
    if (req.params.id === '0') {
        next('route');
    } else {
        next();
    }
}, function (req, res, next) {

        News.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
            News.findOne({_id: req.params.id}).then(function (news) {
                res.send(news).catch(next);
            });
        });
});

//http://localhost:3000/api/news/5c57576fc1f92c1f54e783c3
router.delete('/news/:id', function (req, res, next) {
    if (req.params.id === '0') {
        next('route');
    } else {
        next();
    }
}, function (req, res, next) {
        News.findByIdAndRemove({_id: req.params.id}).then((news)=> {
            res.send(news);
        }).catch(next);
});

module.exports = router;