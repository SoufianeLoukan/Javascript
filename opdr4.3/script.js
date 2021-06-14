var plaatjes = [1, 2, 3];
var teller = 1;
var teller2 = 1;
var teller3 = 1;
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('ogen1.jpg')";


slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('ogen"+ getOgen() + ".jpg')";
});

function getOgen() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }
    console.log(teller);
    return teller;
}

var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('neus1.jpg')";


slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('neus"+ getNeus() + ".jpg')";
});
function getNeus() {
    if (teller2 >= plaatjes.length) {
        teller2 = 1;
    } else {
        teller2++;
    }
    console.log(teller2);
    return teller2;
}

var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('mond1.jpg')";


slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('mond"+ getMond() + ".jpg')";
});
function getMond() {
    if (teller3 >= plaatjes.length) {
        teller3 = 1;
    } else {
        teller3++;
    }
    console.log(teller3);
    return teller3;
}