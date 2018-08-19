(function(){
var numberOfLoops = 1000000;
var incrementLimit = 0;

function appendTimeStamp(sinceTimeStart, increment) {
  $(".bogoDescription").append(`😎 ${sinceTimeStart} ms passed from doing nothing ${numberOfLoops*increment} times. 😎`);
};

const BogoLoops = function (e) {
  incrementLimit += 1;
  e.preventDefault();

  let startTime = (new Date()).getTime();

  for (increment = (incrementLimit - 1); increment < incrementLimit; increment++) {
    for (i = 0; i < (increment * numberOfLoops); i++) {}
    //Screen display bottleneck.
    let sinceTimeStart = (new Date()).getTime() - startTime;
    appendTimeStamp(sinceTimeStart, increment);
    console.log(sinceTimeStart + 'ms passed.');
  }
};

const changeButton = function () {
  document.getElementById("mainButton").innerHTML = "Do More Nothing";
};
$(".bogoGoButton").click(changeButton);
$(".bogoGoButton").click(BogoLoops);
}());
//Remember to do more proper code structure when you make longer stuff.