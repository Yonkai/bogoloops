const BogoLoops = function(){
    let startTime = (new Date()).getTime();
    let highPower  = 10;
//goes up to 10 Billion itterations...
for(power=0;power<=highPower;power++){
    for(i=0;i<(Math.pow(highPower, power));i++){}
    //Screen display bottleneck.
    let sinceTimeStart = (new Date()).getTime() - startTime;
    console.log(sinceTimeStart +'ms passed.');
    console.log('Looped through 10^'+ power +' times');
    console.log('Going up a power...');
    }
console.log('Finished. Last iteration looped 10 Billion times');
console.log('next power would of been:' + power);
};

$(".bogoGoButton").click(BogoLoops);