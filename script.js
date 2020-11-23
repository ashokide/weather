function timeInfo() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
    if(h < 10) {
        h = "0" + h;
    }
    else if(h>12){
        h = h - 12;
        h = "0" + h; 
    };
    m = (m < 10) ? ("0" + m) : m;
    s = (s < 10) ? ("0" + s) : s;
    session = (new Date().getHours >= 12) ? (session) : "PM";
    let timeDiv = document.getElementById("time");
    timeDiv.innerHTML = `${h}:${m}:${s} ${session}`;
    setTimeout(timeInfo, 1000);
}
timeInfo();

function dateInfo() {
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth();
    let y = date.getFullYear();
    let dateDiv = document.getElementById("info");
    dateDiv.innerHTML = `${d} - ${m} - ${y}`;
    setTimeout(dateInfo, 1000);
}
dateInfo();

function locationInfo() {
    let location;
    let locate = document.getElementById("locate");
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(function(pos)
            {
                let location = "Lattitude : " + pos.coords.latitude;
                location +=" Longitude : " + pos.coords.longitude; 
                let locate = document.getElementById("locate");
                locate.innerHTML =` ${location} `;
            }
        );
    }
    else
    {
        location = "Allow Geolocation Access / Not Supported";
    }
    locate.innerHTML =` ${location} `;
}
locationInfo();