var express = require('express');
var app = express();
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./sqlite/week3_ex4.db', (err) => {
   if (err) {
     return console.error(err.message);
   }
   console.log('Connected to the week3_ex4 SQlite database.');
 });

app.use(express.static('public'));

//main page
app.get('/login.html', function (req, res) {
   res.sendFile( __dirname + "/" + "login.html" );
})

//invalid login page
app.get('/invalidLogin.html', function (req, res) {
   res.sendFile( __dirname + "/" + "invalidLogin.html" );
})

app.get('/process_get', function (req, res) {

   //this is the SQL injection vulnerable query
   let sql = 'SELECT * FROM users WHERE email = \'' + req.query.username + '\' AND password = \'' + req.query.password + '\'';
   console.log(sql);
   db.all(sql, [], (err, rows) => {
      if(err) {
         console.log(err);
         return callback(err);
      }

      //if the query returns results it will show the login information
      if(rows.length > 0){
         console.log('Logged in as:' + rows[0].email + ' - Password: ' + rows[0].password);
         res.send('LOG-IN SUCCESSFUL! Logged in as:' + rows[0].email + ' - Password: ' + rows[0].password);
      }

      //if the query returns no results it will show the invalid login page
      else {
         res.redirect('http://127.0.0.1:8081/invalidLogin.html');
      }
   });   
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})