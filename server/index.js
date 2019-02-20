const express = require('express');

app.get('/temperature', function(req, res) {
    res.send('24 °C');
});
 
app.get('/humidity', function(req, res) {
    res.send('48%');
});

app.listen(3000, function() {
    console.log('Server listening on Port 3000');
});
