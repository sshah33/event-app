//models/Company.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var eventSchema = new Schema({
    activity: String,
    company: String,
    start: String,
    end: String
});
module.exports = mongoose.model('Event', eventSchema);