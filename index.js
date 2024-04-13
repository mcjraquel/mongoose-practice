const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/songApp");
    console.log("in");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const songSchema = {
    title: String,
    artist: String,
    year: Number,
};

const Song = mongoose.model("Song", songSchema);

const urSoPretty = new Song({
    title: "ur so pretty",
    artist: "wasia project",
    year: 2023,
});

console.log(urSoPretty);
urSoPretty.save();
