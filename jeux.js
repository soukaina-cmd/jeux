var des = "x"
window.onload = function () {

    // on a appele la td
    var tds = document.getElementsByTagName("td")
    for (var i = 0; i < tds.length; i++) {
        tds[i].addEventListener("click", verifier)

    }
    function verifier() {
        // this c le click 
        var td = document.getElementsByTagName("td")

        if (this. textContent== "") {
            this.innerText = des;
            if (des == "x") {
                des = "o"
            } else {
                des = "x"
            }
            if ((td[0].textContent == td[1].textContent && td[1].textContent== td[2].textContent && td[0].textContent!="") || (td[3].textContent == td[4].textContent && td[4].textContent == td[5].textContent  && td[3].textContent!="") || (td[6].textContent == td[7].textContent && td[7].textContent == td[8].textContent && td[6].textContent!="") || (td[0].textContent == td[3].textContent  && td[0].textContent== td[6].textContent  && td[0].textContent!="") || (td[1].textContent == td[4].textContent && td[4].textContent == td[7].textContent  && td[1].textContent!="") || (td[2].textContent == td[5].textContent  && td[5].textContent== td[8].textContent  && td[2].textContent!="")|| (td[0].textContent == td[4].textContent  && td[4].textContent== td[8].textContent  && td[0].textContent!="") || (td[2].textContent == td[4].textContent && td[4].textContent == td[6].textContent  && td[2].textContent!="")) {
                for(var i=0;i<td.length;i++){
                    td[i].innerText=""
                }
                if (des == "x") {
                    alert("le gagnant est : O")
                } else {
                    alert("le gagnant est : X")
                }
                
                des="x"
               

            }

        }
    }
}
