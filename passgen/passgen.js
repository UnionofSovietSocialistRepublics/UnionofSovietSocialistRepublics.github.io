


function pass(){
    var innerlength = document.getElementById("input")
    var inlength = innerlength.value;
    var numlength = Number(inlength)
    passgen(numlength)
   }

function passgen(numlength){
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
       //console.log(Chad)
       var Asc = String.fromCharCode(Chad)
       var Char = Char + Asc
       }
       //alert("Your password is " + Char)
       checker(numlength, Char)
}

function checker(numlength, Char){
    console.log(Char)
if (Char.indexOf('<') > -1){
    passgen(numlength)
}else {
    document.getElementById("new pass")
    .innerHTML +=
    `<h4>
    Your password is: ${Char}
    </h4>`;
}
}

function deletion(){
    document.getElementById("new pass")
    .innerHTML =
    "";
}

    



