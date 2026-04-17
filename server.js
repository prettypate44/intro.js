require("dotenv") .config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware for json parsing (Required)\\
app.use(express.json());


//server static files from a folder named 'public'\\
app.use(express.static("public"));

//Bonus:custom middleware to log requests\\
app.use((req, res, next) => {
 console.log(`${req.method} request to ${req.ulr}`);
 next();

})




// implementing the routes,GET,POST,\\

//GET/:\\
app.get(`/`, (req, res) => {
    res.send("MY WEEK 2 API");
});



//POST\\
//POST /User : Use error handling(400)if data is missing \\

app.post(`/user`, (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({error: "missing name or email" });
    }
    res.send(`Hello, ${DIVINE}!`);

})



//GET/user/:id:\\
app.get(`/user/:id`, (req, res) => {
    const id = req.params.id;
    res.send(`User ${id} profile`)
});


app.listen(PORT,  ()  => console.log(`server on running on port ${PORT}`));



