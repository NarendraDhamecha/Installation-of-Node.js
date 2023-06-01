const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const contactUsRoutes = require("./routes/contactUs");
const path = require('path');
const rootDir = require("./util/path")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", adminRoutes);

app.use("/shop", shopRoutes);

app.use("/contactus", contactUsRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404-page.html"))
})

app.listen(3000);
