const mongoose = require("mongoose")
const horseSchema = mongoose.Schema({
    teamname: String,
    country: String,
    number_of_players: Number
})
module.exports = mongoose.model("horse",horseSchema)
