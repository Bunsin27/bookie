const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googleboks"
);

const bookSeed =
{
    authors: ["Joshua Clover"],
    description: "The Matrix (1999) was a true end-of-the-millennium movie, a statement of the American Zeitgeist, and a prognosis for the future of big-budget Hollywood filmmaking",
    link: "https://books.google.com",
    title: "The matrix",
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });