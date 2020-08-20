var ShortUrl = require('../models/shorturl');

module.exports = {
    index,
    show,
    create,
    view
};

function index(req, res) {
    res.render('index');
}

function show(req, res) {
    const url = ShortUrl.getOne(req.params.shorturl);
    if (url !== undefined) {
        res.redirect(url.link);
        return;
    }
    res.redirect('/');
}

function create(req, res) {
    if (req.body.link === '') return;
    ShortUrl.create(req.body);
    res.redirect(`/${req.body.url}/view`);
}

function view(req, res) {
    const shortUrl = ShortUrl.getOne(req.params.shorturl);
    res.render('show', {
        shortUrl
    });
}