const express = require("express");
const app = express();
const path = require("path"); // Import the 'path' module for file paths
const port = 8000;

const hbs = require("hbs");

// Set the view engine and specify the views directory
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views")); // Specify the correct views directory

// Register partials
hbs.registerPartials(path.join(__dirname, "../partials")); // Specify the correct partials directory

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "../public"))); // Specify the correct public directory

app.get("/", (req, res) => {
    // Dynamically passing data to HTML file using template engine
    res.render("index", { appName: "Weather App" });
});

app.get("/about", (req, res) => {
    res.render("about",{ appName: "Weather App" });
});


app.get("/weather", (req, res) => {
    res.render("weather",{appName:"Weather App"});
});

app.get("*", (req, res) => {
    res.send("404 error, page not found");
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
