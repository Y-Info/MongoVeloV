// shell excute
var shell = require('shelljs');
shell.exec('./src/scripts/test.sh');

var today = new Date();

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
var hh = today.getHours();
var mn = today.getMinutes();
var ss = today.getSeconds();
today = mm + '/' + dd + '/' + yyyy + " | " + hh + "." + mn + "." + ss;
console.log(today);

module.exports = shell;
