const mongoose = require('mongoose');

mongoose.connect('mongodb://sysadmin:sysadmin2019@ds363996.mlab.com:63996/heroku_890x66tk', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
