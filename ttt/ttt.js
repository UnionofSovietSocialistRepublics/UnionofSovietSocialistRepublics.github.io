function board(){
    var B = -1;
    var long = document.getElementById("length");
    var length = long.value;
    document.getElementById("box")
    .innerHTML =
    "";
    for(i=1; i<=length; i++){
        document.getElementById("box")
        .innerHTML +=
        `<div id="break"> </div>`;
        B = B+1;
        for (j=1; j<=length; j++){
            document.getElementById("box")
            .innerHTML +=
            `<div id="${B}${j}" onclick="ttt(this)" >   ?|  </div>`;
        }
    }


} 
var turn = 0;
function ttt(element){
    //var r = document.getElementById("placer");
    //var placement = r.value;
    switch(element.innerText){
        case "X|":
        alert("This square is not empty.")
        return;
        case "O|":
        alert("This square is not empty.")
        return;
    }
    switch(turn % 2 === 0){
        case true:
            element.innerHTML = "X|"
            break;
        case false:
            element.innerHTML = `O|`
            break;
    }
    //if (){

   // }
   turn = turn+1;
}

