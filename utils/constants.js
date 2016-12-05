/* globals module require*/

const secretWord = "secret";
const port = process.env.PORT || 3001;
const usersConnectionString = "mongodb://admin:admin@ds119568.mlab.com:19568/auctions";
const auctionsConnectionString = "mongodb://admin:admin@ds119568.mlab.com:19568/auctions";
const loggedIn = {
        result: {
            isAuthenticated: true
        }
    },
    notLoggedIn = {
        result: {
            isAuthenticated: false
        }
    };
const cryptingKey = 'asd214ag2t52rlla'
const siteCurrency = {
    big: 'лв',
    small: 'стот.'
};

module.exports = {
    secretWord,
    usersConnectionString,
    port,
    auctionsConnectionString,
    loggedIn: loggedIn,
    notLoggedIn: notLoggedIn,
    cryptingKey,
    siteCurrency: siteCurrency
};