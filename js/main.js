function appendTimeStamp(sinceTimeStart,power){
    $( ".bogoDescription" ).append( `<p> ${sinceTimeStart} milliseconds passed from doing nothing 10^${power} times. </p>` );
};

const BogoLoops = function(){
    let milestoneData = {
    One:"You've gone 1 loop.",
    Ten:"You've gone 10 loops",
    Hundred:"You've gone 100 loops",
    Thousand:"You've gone 1000 loops"
    };
    console.log(milestoneData);
    let startTime = (new Date()).getTime();
    let exponentLimit = 8;
    let baseTen = 10;
//goes up to 10 Billion itterations...
for(power=0;power<=exponentLimit;power++){
    for(i=0;i<(Math.pow(baseTen, power));i++){}
    //Screen display bottleneck.
    let sinceTimeStart = (new Date()).getTime() - startTime;
    appendTimeStamp(sinceTimeStart,power); 
    console.log(sinceTimeStart +'ms passed.');
    console.log('Looped through 10^'+ power +' times');
    }
    //$(".bogoGoButtonContainer").remove();
console.log(`Finished. Last iteration looped + ${Math.pow((baseTen),exponentLimit)}`);
console.log(`next power would of been: + ${Math.pow(baseTen,exponentLimit+1)}`);
};

const changeButton = function() {
    document.getElementById("mainButton").innerHTML = "Do More Nothing";
    $("a").removeClass("bogoGoButton");
}

$(".bogoGoButton").click(changeButton);
$(".bogoGoButton").click(BogoLoops);
