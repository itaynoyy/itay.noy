const sql = require("../db/db.js");
const path = require("path");


const createNewCustomer = function(req,res){
// Validate request
    if (!req.body) {
        res.status(400).send({
        message: "Content can not be empty!"
        });
        return;
    }


    sql.query("INSERT INTO companies (name,email,phone,description,job) VALUES (?,?,?,?,?)", [req.body.name, req.body.email, req.body.phone, req.body.description ,req.body.job], (err, res) => {
        console.log("DO IT!");
        
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in adding company: " + err});
            return;
        }

        console.log("added company: " );
        res.sendFile(path.join(__dirname,'../cv.html'));
        return;
    });
};

const showCustomers = function(req, res){
    sql.query("SELECT * FROM companies", (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting all companies: " + err});
            return;
        }
        console.log("got all companies...");
        res.send(mysqlres);
        return;
        });
    }

module.exports = {createNewCustomer, showCustomers};
