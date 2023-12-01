const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./config/mongoose");

app.get('/api', (req, res) => {
    res.json({ message: "Hello from Server" });
});

db.collection("Pokedex").insertOne({
    pokedexID: 1,
    name: "bulba",
    typing: {
        type1: "poison",
        type2: "grass",
    },
    region : "Kanto"
})

app.listen(PORT, () => {
    console.log(`Server Active on Port ${PORT}`);
});

