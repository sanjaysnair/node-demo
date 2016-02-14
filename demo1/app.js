var express = require('express'),
    app = express();

app.get('/', function (req, res) {
    res.send('hello');
});

app.listen(3000, function () {
    console.log('listening to port 3000');
});
