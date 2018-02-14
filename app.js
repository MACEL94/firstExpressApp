var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Hi there, welcome!");
});

//animal
app.get("/speak/:animal", function (req, res) {
    var word = "unknown";
    if (req.params.animal == "pig") {
        word = "'Oink'";
    }
    else if (req.params.animal == "cow") {
        word = "'Moo'";
    }
    else if (req.params.animal == "dog") {
        word = "'Woof Woof!'";
    }
    res.send("The " + req.params.animal + " says " + word);
});

// repeat
app.get("/repeat/:word/:num", function (req, res) {
    var responseMessage = "";
    for (var i = 0; i < req.params.num; i++) {
        responseMessage += (req.params.word + " ");
    }
    res.send(responseMessage);
});

//everything else
app.get("*", function (req, res) {
    res.send("Sorry, page not found... What are you doing with your life?");
});

// Tell Express to listen
app.listen("3000", function () {
    console.log("Server started!!");
});