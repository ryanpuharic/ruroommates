const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gradYear: {
        type: Number,
        required: true,
    },
    lottoNum: {
        type: Number,
    },
    morningPerson: {
        type: Boolean,
        required: true,
    },
    isNeat: {
        type: Boolean,
        required: true,
    },
    wantsQuiet: {
        type: Boolean,
        required: true,
    },
    smokes: {
        type: Boolean,
        required: true,
    },
    overnightGuests: {
        type: Boolean,
        required: true,
    },
    isOutgoing: {
        type: Boolean,
        required: true,
    },
});

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel;