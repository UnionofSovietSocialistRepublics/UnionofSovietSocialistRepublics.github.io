


function pass(){
    var innerlength = document.getElementById("input")
    var inlength = innerlength.value;
    var numlength = Number(inlength)
    var Char = "";
    var Asc = "";



    switch(isNaN(numlength)){
        case true:
        alert("Not a number");
        return;
    }
    switch(numlength){
        case 0:
        alert("Not a number");
        return;
    }
       for (i=1; i<=numlength; i++){
       var Chad = (Math.floor(Math.random()*100)+35)
       if (Chad >= 127){Chad = 126}
       var Asc = String.fromCharCode(Chad)
       var Char = Char + Asc
       }
       document.getElementById("new pass")
       .innerHTML +=
       `<h4>
       Your password is: ` + Char + `
       </h4>`;
       //alert("Your password is " + Char)
   }

function deletion(){
    document.getElementById("new pass")
    .innerHTML =
    "";
}

    



