//  initialize a project with npm
// express install


//dynamic routing
// how to grt data  coming from frontend at backend route

//setting up parsers for form
// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.get("/", function(req, res){
//     res.send("Chal raha hai");
// });

// app.listen(3000, function(){
//     console.log("It running");
// })

//setting up ejs for ejs pages
   //install ejs form npm 
   // setup ejs as a view engine

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
});

app.listen(3000, function(){
    console.log("It running");
})

//setting up public static files