

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
            `<h2 id="${B}${j}" onclick="ttt(this)" >   ?|  </h2>`;
        }
    }


} 
var turn = 0;
function ttt(element){
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
   turn = turn+1;
//    var B = -1;
//     var length = 5;
//     for(i=1; i<=length; i++){
//         B = B+1;
//         Z = B.toString()
        
//         // for (j=1; j<=length; j++){
//         //     Jstring = j.toString()
//         // //    if (document.getElementById(Z+Jstring).innerText = "|"){
//         // //     console.log("boar")
//         // //     }
//         //             //    switch(document.getElementById(Z+Jstring)){
//         // //     case "X|":
//         // //         console.log("fr")
//         // //         break;
//         // //     case "O|":
//         // //         console.log("ambutakam")
//         // //         break;
//         // //     case "?|":
//         // //         console.log("sus")
//         // //         break;
//         // //    }
//         //     console.log(document.getElementById(Z+Jstring).innerText)
//         // }
//     }
}

