var count = document.getElementById('count');
var start = new Date("14 sept , 2020 00:00:00");
var x     = setInterval(countDate, 1000)
var years = 0;

function countDate(){
    var now  = new Date();

    //Convert operations
    var numY = 1000 * 60 * 60 * 24 * 365;
    var numD = 1000 * 60 * 60 * 24;
    var numH = 1000 * 60 * 60;
    var numM = 1000 * 60;

    //Time differences
    var diff = now-start;
    
    var years = Math.floor(diff/numY);
    var days = Math.floor((diff % numY)/numD);
    var hrs  = Math.floor((diff % numD) / numH);
    var min  = Math.floor((diff % numH) / numM);
    var secs = Math.floor((diff % numM) / 1000);

    if(years < 10){
        years = "0" + years;
    }

    if(days < 10 ){
        days = "0" + days;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(hrs < 10){
        hrs = "0" + hrs;
    }

    if(secs < 10){
        secs = "0" + secs;
    }

    if(years > 0){
        if(years == 1){
            count.innerHTML = years + " año " +  days  +" días " + "activos y"+ "<br>" + hrs + "H : " + min + " M : " + secs + "S ";
        }
        else{
            count.innerHTML = years + " años " + days  +" días " + "activos y"+ "<br>" + hrs + "H : " + min + " M : " + secs + "S ";
        }
    }
    else{
        count.innerHTML = days  +" días " + "activos y"+ "<br>" + hrs + "H : " + min + " M : " + secs + "S " ;
    }
}

window.onload = countDate;
