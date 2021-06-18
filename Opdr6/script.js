punten = 0;
punten2 = 0;
aanDeBeurt = 1;
htmlPunten = document.getElementById("punten");
htmlPunten2 = document.getElementById("punten2");

kaart1 = "";
var memoryGame = document.getElementsByClassName("memory-game")[0];

memoryGame.addEventListener("click", function (event) {
    var kaartVinden = event.target.parentElement;

    if (event.target.classList.contains("voorkant")) {
        kaartVinden.classList.add("zichtbaar");

        if (kaart1 !== "") {

            if (kaartVinden.children[1].src === kaart1.children[1].src) {
                if (aanDeBeurt=== 1) { punten++;}
                else {
                    punten2++
                }


                htmlPunten.innerHTML = punten;
                htmlPunten2.innerHTML = punten2;
                kaart1 = "";
            } else {
                if (aanDeBeurt === 1) {
                    aanDeBeurt = 2
                } else {
                    aanDeBeurt = 1
                }
                setTimeout(function () {
                    kaartVinden.classList.remove("zichtbaar");
                    kaart1.classList.remove("zichtbaar");
                    kaart1 = "";

                }, 700);
            }

        } else {
            kaart1 = kaartVinden;
        }
    }
});