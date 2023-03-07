const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
    name: String,
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    versionKey: false
});

const UserModel = model('userjob', UserSchema);
module.exports = { UserModel };