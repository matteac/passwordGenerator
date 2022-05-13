const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const routes = require(path.join(__dirname, "routes", "routes.js"));
app.use(routes)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})