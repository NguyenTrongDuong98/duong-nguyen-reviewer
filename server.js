const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/duong-nguyen-reviewer'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/duong-nguyen-reviewer/index.html'));
});

app.listen(process.env.PORT || 8080);