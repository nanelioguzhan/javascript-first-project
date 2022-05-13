// Basitçe sizden girişte isminizi isteyip sonra bu ismi karşılama ekranına yerleştirerek o anki saati ve günü gösteren bir ekran. Yapması oldukça kolay ve zevkli!
function userName(){
    receivedName = prompt("Enter your name: ")
    nameInfo = document.querySelector("h2")
    nameInfo.innerHTML = ` Welcome ${receivedName}! `
    while (!receivedName || (receivedName / 1) == receivedName ){
        receivedName = prompt("Enter your name: ")
        nameInfo = document.querySelector("h2")
        nameInfo.innerHTML = receivedName        
    }
}

function newBackgroundColor(){
    color = prompt("Type your background color: ")
    practice = document.body.style.backgroundColor;
    document.body.style.backgroundColor = color;
    while (!color || (color / 1) == color ){
        color = prompt("Type your background color: ")
        document.body.style.backgroundColor = color;
    }
    
}

function newTextColor(){
    let textColor = prompt("Choose your text color: ")
    document.body.style.color = textColor
    while (!textColor || (textColor / 1) == textColor ){
        textColor = prompt("Choose your text color: ")
        document.body.style.color = textColor;
    }
}
function newClockColor(){
    let clockColor = prompt("Choose your clock color: ")
    colorInfo = document.querySelector("#MyClockDisplay")
    colorInfo.style.color = clockColor
    while (!clockColor || (clockColor / 1) == clockColor ){
        let clockColor = prompt("Choose your clock color: ")
        colorInfo = document.querySelector("#MyClockDisplay")
        colorInfo.style.color = clockColor        
    }
}

function showTime(){
    var date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let day = days[d.getDay()];

    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = `${h} :  ${m}  :  ${s}  ${session}`
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    document.querySelector(".day").innerHTML = day
    
    setTimeout(showTime, 1000);
    
}


userName()
newBackgroundColor()
newTextColor()
newClockColor()
showTime();




