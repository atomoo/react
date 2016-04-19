/**
 * Created by Atom on 2016.4.19.0019.
 */
var sub = require('./sub.js');

var app = document.createElement('div');
app.innerHTML = 'h1 hello world !';
app.appendChild(sub());
document.body.appendChild(app);