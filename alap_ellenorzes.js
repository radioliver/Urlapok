// /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/

function ellenorAlap() {
    let nev = document.forms["alapUrlap"]["nev"].value;
    let nevKiiratasa = document.getElementById("nevEredmeny");

    if (nev.trim() === "") {
        //alert("A név mező nem lehet üres!");   
        if (nevKiiratasa) {
            nevKiiratasa.innerText = "A név mező nem lehet üres!";
            nevKiiratasa.classList.add("hiba");
        }
        return false;
    }

    let nevfilter = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ -]+$/;
    if (!nevfilter.test(nev)) {
        //alert("A név mező csak betűket, szóközöket, és kötőjeleket tartalmazhat!");
         if (nevKiiratasa) {
            nevKiiratasa.innerText = "A név mező csak betűket, szóközöket, és kötőjeleket tartalmazhat!";
            nevKiiratasa.classList.add("hiba");
        }
        return false;
    }
      
    
    nevKiiratasa.innerHTML = "Helyes név: " + nev;
    nevKiiratasa.classList.remove("hiba");
    return false;
    };

