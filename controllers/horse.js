var horse = require('../models/horse');
// List of all horses
exports.horse_list = async function(req, res) {
    try{
        thehorses = await horse.find();
        res.send(thehorses);
        }
        catch(err){

            res.status(500);
           
            res.send(`{"error": ${err}}`);
           }
        };

// for a specific horse.
exports.horse_detail = function(req, res) {
res.send('NOT IMPLEMENTED: horse detail: ' + req.params.id);
};
// Handle horse create on POST.
exports.horse_create_post = async function(req, res) {
    console.log(req.body)
    let document = new horse();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"teamname":"goat", "cost":12, "size":"large"}
    document.teamname = req.body.teamname;
    document.country = req.body.country;
    document.number_of_players = req.body.number_of_players;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){

        res.status(500);
       
        res.send(`{"error": ${err}}`);
       }
    };
// Handle horse delete form on DELETE.
exports.horse_delete = function(req, res) {
res.send('NOT IMPLEMENTED: horse delete DELETE ' + req.params.id);
};
// Handle horse update form on PUT.
exports.horse_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: horse update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.horse_view_all_Page = async function(req, res) {
    try{
    thehorses = await horse.find();
    res.render('horses', { title: 'horse Search Results', results: thehorses });
    }
    catch(err){

        res.status(500);
       
        res.send(`{"error": ${err}}`);
       }
    };