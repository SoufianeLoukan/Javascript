pics = document.getElementById("pics");
createPicsHolders();
createAapImages();

function createPicsHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolder = document.createElement("div");
        pictureHolder.className = "picture-holder";
        pictureHolder.id = "picture-holder-" + i;
        pics.appendChild(pictureHolder);
    }

}

function createAapImages() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for (var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        aapPLaatje = document.createElement("img");
        aapPLaatje.src = "aap" + (i + 1) + ".jpg";
        aapPLaatje.id = (i+1);
        aapPLaatje.addEventListener("click", function () {
            maakFavoriet(this.id);
        })
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(aapPLaatje);
    }
}


function maakFavoriet(id) {
    console.log("maak mij favoriet het gaat om aap " + id);
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i< notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('heart.png')"

}

// picsholders ,aken
// picHolder bevat een plaatje van een aap en een favoerite symbool


//apenPlaatjes toevoegen aan picsHolders
// favoriteSymbols toevoegen aan picsHolders