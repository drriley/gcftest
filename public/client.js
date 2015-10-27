var socket = io();

function readData (data) {
var results = data.split(',');

 $('#humidity').text(results[0] + "%");
 $('#temp').text(results[1] + " Celsius");

}


socket.on('message', readData);
