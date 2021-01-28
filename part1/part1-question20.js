var intervalTime = setInterval(printTime, 1000);
function printTime() {
    var d = new Date();
    var time = d.toLocaleTimeString();
    console.log(time);
}

