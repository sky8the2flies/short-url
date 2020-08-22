var ShortUrl = require('../models/shorturl');

module.exports = {
    index,
    show,
    create,
    view
};

function index(req, res) {
    ShortUrl.find({}, function(err, shortUrl) {
        console.log(shortUrl);
    });
    res.render('index', {
        page: 'root',
        rUrl: makeUrl(6),
        errMsg: null
    });
}

function show(req, res) {
    ShortUrl.findOne({url: req.params.shorturl}, function(err, shortUrl) {
        if (!shortUrl) {
            return res.redirect('/');
        }
        res.redirect(shortUrl.link);
    });
}

function create(req, res) {
    if (req.body.link === '') return;
    if (!req.body.url) req.body.url = makeUrl(6);
    const shortUrl = new ShortUrl(req.body);
    shortUrl.save(function(err) {
        if (err) {
            if(err.code === 11000)
                return res.render('index', {
                    page: 'root',
                    rUrl: makeUrl(6),
                    errMsg: {
                        head: `Error on /${req.body.url}`,
                        body: `Url is already in use. Please choose a different extension`
                    }
                });
            return res.redirect('/');
        }
        res.redirect(`/${req.body.url}/view`);
    });
}

function view(req, res) {
    ShortUrl.findOne({url: req.params.shorturl}, function(err, shortUrl) {
        if (!shortUrl) {
            return res.redirect('/');
        }
        res.render('show', {
            page: 'view',
            shortUrl
        });
    });
}

function makeUrl(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}