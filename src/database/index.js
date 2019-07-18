const mongoose = require('mongoose');
const mongoURL = "mongodb://sysadmin:sysadmin2019@ds363996.mlab.com:63996/heroku_890x66tk";
mongoose.connect(mongoURL, {
  useNewUrlParser: true, 
  useCreateIndex: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
