


function pass(){
    var innerlength = document.getElementById("input")
    var inlength = innerlength.value;
    var numlength = Number(inlength)
    var Char = "";
    switch(inlength.length){
        case 0:
        alert("Nothing detected");
        return;
    }
    if (isNaN(numlength)) {
        alert("Not a number")
        return;
    }else {
        for (i=1; i<=numlength; i++){
        var Chad = (Math.floor(Math.random()*100)+35)
        if (Chad >= 127){Chad = 126}
        var Asc = String.fromCharCode(Chad)
        var Char = Char + Asc
        }
        document.getElementById("new pass")
        .innerHTML +=
        `<h4>
        Your password is ` + Char + `
        </h4>`;
        //alert("Your password is " + Char)
    }
    

}

