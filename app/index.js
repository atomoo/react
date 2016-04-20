/**
 * Created by Atom on 2016.4.19.0019.
 */
require('./main.css');
var sub = require('./sub.js');

var app = document.createElement('div');
app.innerHTML = '<h1>h1 hello world !</h1>';
app.appendChild(sub());
document.body.appendChild(app);