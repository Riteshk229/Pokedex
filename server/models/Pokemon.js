const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    pokedexID: {
        type : Number,
    },
    name: {
        type: String,
        required: true
    },
    typing: {
        type1: {
            type: String,
            required: true
        },
        type2: {
            type: String,
        }
    },
    region: {
        type: String,
        form: {
            type: String,
        },
        required: true
    },
    leagues: {
        GL: {
            type : Boolean,
        },
        UL: {
            type : Boolean
        },
        ML: {
            type : Boolean,
        },
        FM1: {
            type : Boolean,
        },
        FM2: {
            type : Boolean,
        },
        required : true
    }
}, {
    timestamps : true
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
