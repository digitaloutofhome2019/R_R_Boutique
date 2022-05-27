const mongoose = require("mongoose");
const { $where } = require("../models/userModel");
async function connectiondb()
{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connected!${connection.connection.host}`)

    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}
module.exports = connectiondb;
