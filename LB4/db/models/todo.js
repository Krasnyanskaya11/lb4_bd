const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const todoShema = new Schema (
    {
        name: {type: String, nullable: false},

        description: {type: String, nullable: false},

        deadline: {type: Date, nullable: false},

        if_ok: {type: Boolean, nullable: false},

        if_delete: {type: Boolean, nullable: false},
    }
);

module.exports = mongoose.model("ToDo", todoShema);