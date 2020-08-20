const shortUrls = [
    {url: '0', link: 'https://google.com'}
];

module.exports = {
    getOne,
    create
};

function getOne(shortUrl) {
    console.log(shortUrls)
    return shortUrls.find(urls => urls.url.toString() === shortUrl.toString());
}

function create(shortUrl) {
    if (shortUrl.url === '') {
        shortUrl.url = makeid(6);
    }
    shortUrls.push({url: shortUrl.url, link: shortUrl.link});
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }