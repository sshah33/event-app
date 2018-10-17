//models/Activity.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var activitySchema = new Schema({
  activityName: String
});
module.exports = mongoose.model('Activity', activitySchema);