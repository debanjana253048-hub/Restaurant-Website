const express = require("express");

const app = express();
const PORT = 3000;

// Set EJS as template engine
app.set("view engine", "ejs");

// Home Route
app.get("/", (req, res) => {
    res.render("index");
});

// About Route
app.get("/about", (req, res) => {
    res.render("about");
});

// Contact Route
app.get("/contact", (req, res) => {
    res.render("contact");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});