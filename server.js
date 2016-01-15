var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
var requestify = require('requestify');

app.get('/', function(req, res) {

    console.log(req);
    res.send('running . . .!');

});

app.get('/index.html', function(req, res) {

    console.log(req);
    res.sendFile('./index.html');

});

var companiesAPIURL = "http://pangea.dotomi.com/api/companies";


app.get('/companies', function(req, res) {

    requestify.get(companiesAPIURL).then(function(response) {

        var companyList = response.getBody();

        res.send(companyList);

    });

});


var server = app.listen(1500, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});


