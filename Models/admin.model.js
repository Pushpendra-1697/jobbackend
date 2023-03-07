const { Schema, model } = require("mongoose");
const AdminSchema = new Schema({
    name: String,
    position: String,
    contract: String,
    location: String
}, {
    versionKey: false
});

const AdminModel = model('admin', AdminSchema);
module.exports = { AdminModel };