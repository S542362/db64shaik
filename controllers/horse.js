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
// for a specific Costume.
exports.horse_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await horse.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.horse_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await horse.findById(req.params.id)
        // Do updates of properties
        if(req.body.teamname) toUpdate.teamname = req.body.teamname;
        if(req.body.country) toUpdate.country = req.body.country;
        if(req.body.number_of_players) toUpdate.number_of_players = req.body.number_of_players;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
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