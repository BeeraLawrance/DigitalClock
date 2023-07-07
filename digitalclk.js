function time() {
    var date =new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var dd =date.getDate();
    var mo = date.getMonth();
    var yy = date.getFullYear();
    var day = date.getDay();
    var am_pm="AM";
  
    
    if (hh>12) {
        am_pm="PM";
        // console.log(hh);
        if (hh>12) {
           
            hh=hh-12;
        }
    } 
   
    if (hh==0) {
        hh=12;
    }

   switch (mo) {
    case 0: mo="jan"
        break;
        case 1: mo="feb";
        // document.getElementById("dateht").innerHTML=`${dd}-${mo}-${yy}`;
        break;
        case 2: mo="mar";
       
        break;
        case 3: mo="apr";
        break;
        case 4: mo="may";
        break;
        case 5: mo="jun";
        break;
        case 6: mo="july";
        break;
        case 7: mo="aug";
        break;
        case 8: mo="sep";
        break;
        case 9: mo="oct";
        break;
        case 10: mo="nov";
        break;
        case 11: mo="dec";
        break;
        
    default:
        break;
   }
   switch (day) {
    case 0:
         day="sunday";
         document.body.style.backgroundImage="url(./pic1.jpg)";
        break;
    case 1: day="monday";
    document.body.style.backgroundImage="url(./pic2.jpg)";
    break;
    case 2: day="tuseday";
    document.body.style.backgroundImage="url(./pic3.jpg)";
    break;
    case 3: day="wedesday";
    document.body.style.backgroundImage="url(./pic4.jpg)";
    break;
    case 4: day="thursday";
    document.body.style.backgroundImage="url(./pic5.jpg)";
    break;
    case 5: day="friday";
    document.body.style.backgroundImage="url(./pic6.jpg)";
    break;
    case 6: day="saturday";
    document.body.style.backgroundImage="url(./pic7.jpg)";
    break;
   
    default:
        break;
   } 
   document.getElementById("timeht").innerHTML=`${hh}:${mm}${am_pm}`;
   document.getElementById("dateht").innerHTML=`${dd}-${mo}-${yy}`;
   document.getElementById("dayht").innerHTML=day;
   document.getElementById("sec").innerHTML=ss;

   setTimeout(time,1000);
}   
time();

function closealaram() {
    document.getElementById("alarmcontainer").style.display="none";
}
function openalaram() {
    document.getElementById("alarmcontainer").style.display="flex";
}

var audio = new Audio();
audio.src="./sdevil.mp3";
function alarmfunction() {
    var date =new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var am_pm = "AM";
    if (hh>=12) {
        am_pm="PM";
        if (hh>12) {
            hh=hh-12;
        }
    }
    if (hh==0) {
        hh=12;
    }
    console.log(`${hh} ${mm} ${am_pm}`);
    console.log(am_pm);
    var usegivenhh=document.getElementById("userhh").value;
    var usergivenmm=document.getElementById("usermm").value;
    var usegivenam_pm=document.getElementById("am_pm").value;
    // console.log(usegivenam_pm);
    console.log(usegivenam_pm+""+  usegivenhh +"" +usergivenmm);
    if (hh==usegivenhh &&mm==usergivenmm &&am_pm==usegivenam_pm) {
        audio.play();
        audio.loop=Infinity;
    }
    else{
        audio.pause();
    }
    setTimeout(alarmfunction,1000);
}