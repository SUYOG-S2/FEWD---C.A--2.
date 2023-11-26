var timer;
var ele = document.getElementById("timer");
(function(){
    var sec = 100;
    timer = setInterval(() =>{
        ele.innerHTML = "00:" + sec;
        if(sec == 0) location.href = "./failed.html";
        sec--;
    },1000)
})()
