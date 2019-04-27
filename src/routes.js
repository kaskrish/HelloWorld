var appRouter = function(app) {
    app.get("/", function(req, res) {
        res.send("Hello World");
});
var bodyParser = require('body-parser');
    app.use(bodyParser.json()); // support json encoded bodies
 app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

 app.post('/login', function(req, res) {
        var user_id = req.body.user_id;
        var password = req.body.token;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"token":"challengeToken"}));
    });
    app.get("/customer/challengeToken/user", function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"firstname":"Raghu","lastname":"Datta","email":"raghu.datta@prenetics.com","dob":"27-12-1990"}));
    });
    app.get("/customer/challengeToken/report", function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"report_url":"http://www.sraghudatta.com/customer/RaghuReport.pdf"}));
    });
    app.get("/customer/challengeToken/genetics", function(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify([{"name":"Dummy Name1","symbol":"DummySymbol1"},{"name":"Dummy Name2","symbol":"DummySymbol2"},{"name":"Dummy Name3","symbol":"DummySymbol3"}]));
    });
    app.post('/customer/challengeToken/heartrate', function(req, res) {
        var rate = req.body.rate;
        var timestamp = req.body.timestamp;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"status":"heartrate_received"}));
    });
    app.post('/logout', function(req, res) {
        var token = req.body.token;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({"status":"logged_out"}));
    });
}

module.exports = appRouter;