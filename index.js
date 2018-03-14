const express = require('express');
const serverApp = express();

const PORT = process.env.PORT || 5000;  // necc for heroku deployment

serverApp.get('/', (req, res) => {
    res.send('hi');
})

serverApp.listen(PORT, () => {
    console.log(`Now listening on port $(PORT)`);
});