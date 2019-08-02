var mainHeader = document.getElementById("header");

function getSignHoroscope(context) {
    console.log(context);
    var sign = context.id;
    var xhr = new XMLHttpRequest();
    var url = "http://sandipbgt.com/theastrologer/api/horoscope/"+sign+"/today/"
    xhr.open("GET", url, true);
    xhr.onload = function(){
        hideAllSings();
        var info = JSON.parse(xhr.responseText);
        console.log(info);
        var sunSign = document.getElementById("sunSign");
        sunSign.innerText = info.sunsign;
        var servCont = document.getElementById("serverContent");
        servCont.innerText = info.horoscope;
        var mood = document.getElementById("mood");
        mood.innerText = info.meta.mood;
        var randomImg = new XMLHttpRequest();
        randomImg.open("GET", "https://source.unsplash.com/user/erondu/400x150", true);
        randomImg.onload = function(){
            var img = document.getElementById("randomImg");
            img.src = randomImg.responseURL;
            console.log(randomImg.responseText);
        };
        randomImg.send();
    };
    xhr.send();
}
function showAllSings() {
    var secondaryContainer = document.getElementById("secondaryCont");
    secondaryContainer.style.display = "none";
    var mainContainer = document.getElementById("mainCont");
    mainContainer.style.display = "block";
    mainHeader.innerText = "your Sunsign is";
}

function hideAllSings() {
    var secondaryContainer = document.getElementById("secondaryCont");
    secondaryContainer.style.display = "block";
    var mainContainer = document.getElementById("mainCont");
    mainContainer.style.display = "none";
    mainHeader.innerText = "You are lucky today";
}

var allUsers = [];
