
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const CRUD_operations = require("./routes/CRUD_functions.js");
const path = require("path");

app.use(express.static('public/stylesheets'));




// parse requests of contenttype: application/json
app.use(bodyParser.json());

// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// simple route (for homepage):
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'/CV.html'));
 });

// Create a route for getting all customers
app.get("/companies", CRUD_operations.showCustomers);


// Create a new Customer
app.post('/cv' , CRUD_operations.createNewCustomer);



// set port, listen for requests
app.listen(8080, () => {
console.log("Server is running on port 8080."
);
});