/*globals global module require*/
"use strict";

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

module.exports = function(config) {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.auctionsConnectionString);

    let Auction = require('../models/auction-model');
    let User = require('../models/user-model');
    let Chat = require('../models/chat-model');
    let models = { Auction, User, Chat };

    let data = {};
    //Magic happens here, please don't be offensive
    fs.readdirSync('./data')
        .filter(x => x.includes('-data')) //loads only files that ends on '-data' ex. 'auctions-data.js'
        .forEach(file => {
            let dataModule = require(path.join(__dirname, file))(models); //dir name if any of you use linux

            Object.keys(dataModule)
                .forEach(key => {

                    data[key] = dataModule[key];

                })
        });
    return data;
};