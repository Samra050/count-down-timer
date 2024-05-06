import {differenceInSeconds, DifferenceInSecondsOptions} from "date-fns";
function* countdowntimer(second:number){
while(second > 0){
    yield second;
     second--;
}
}

let timerIterator= countdowntimer(10);
function displaycountdown(){
    let result= timerIterator.next();

    if (!result.done){
        const now=new Date();
        const countdowntime= new Date(now.getTime()+(result.value*1000))
        const remainingseconds= differenceInSeconds(countdowntime,now)
        console.log(`Remaining Seconds:${remainingseconds}`)
        setTimeout(displaycountdown,1000)
    }else{
        console.log("countdown complete!")
    }
}

displaycountdown();
