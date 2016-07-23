/**
 * Created by Atom on 2016/4/22.
 */
var sub = require('./sub.js');

var app = document.createElement('div');
app.innerHTML = '<h1>mobile hello world</h1>';
app.appendChild(sub());
document.body.appendChild(app);
$('body').append('mmmmmmm');