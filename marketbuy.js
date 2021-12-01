function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//get random number between min and max
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function dateNow() {
    var date = new Date();
    var date = toJSONLocal(date);
    return date;
}
function toJSONLocal(date) {
    var local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toJSON().slice(0, 19);
}
//var timerMainLogic = getRandomInt(120000, 320000);
//var timerMainLogic = getRandomInt(2000, 4000);
async function mainLogic() {
    while (true) {
        //alert('do whatever');
        await sleep(getRandomInt(2000, 4000));
        
        await document.getElementsByClassName("px-3 py-2 self-center rounded-sm border border-gray-800 font-bold")[0].click();
        await sleep(getRandomInt(1130, 1586));
        await document.getElementsByClassName("px-3 py-2 self-center rounded-sm border border-gray-800 font-bold")[3].click();  
        await sleep(getRandomInt(850, 1586));
        
        if(document.getElementsByClassName("mx-auto flex justify-center undefined bg-primary hover:bg-green-400 text-green-900 px-4 py-2 text-sm font-bold rounded-md transition-colors items-center")[1]){
            firstWorkerElement = document.getElementsByClassName("mx-auto flex justify-center undefined bg-primary hover:bg-green-400 text-green-900 px-4 py-2 text-sm font-bold rounded-md transition-colors items-center")[1];
        }else{
            await sleep(getRandomInt(350, 860));
            firstWorkerElement = document.getElementsByClassName("mx-auto flex justify-center undefined bg-primary hover:bg-green-400 text-green-900 px-4 py-2 text-sm font-bold rounded-md transition-colors items-center")[1];
            mp = document.getElementsByClassName("grid grid-rows-2 items-center")[0].getElementsByTagName("div")[0].innerText;
        }
        mp = parseInt(mp.replace(" MP", ''))
        firstWorkerPrice = parseFloat(firstWorkerElement.innerText.replace(' $ETERNAL',''));
        if (firstWorkerPrice < 0.35 && mp == 100) {
            firstWorkerElement.click();
            await sleep(getRandomInt(350, 860));
            document.getElementsByClassName("swal2-confirm order-2 mr-3 shadow-md px-4 py-2 text-sm font-bold rounded-md transition-colors items-center bg-primary hover:bg-green-400 text-green-900 focus:outline-none")[0].click();
            await sleep(getRandomInt(2300, 5000));
        }
        console.log(firstWorkerPrice + " - " + mp + " MP");
        /*
        await getDailyReward();
        await doFishes();
        */
        var timerMainLogic = getRandomInt(5000, 8000);
        timerMainLogicNum = timerMainLogic / 1000;
        console.log(
            dateNow()+" Waiting " + timerMainLogicNum.toFixed(2) + " segundos for next check"
        );
        await sleep(timerMainLogic);
    }
}

mainLogic();