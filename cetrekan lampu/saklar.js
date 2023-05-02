function saklar() {
// console.log('saklar'); 
let togle1= document.getElementById("toogle1") 
let togle2 = document.getElementById("toogle2");
let togle3 = document.getElementById("toogle3");
let togle4 = document.getElementById("toogle4");
  
    
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    let lampu4 = document.getElementById("lampu4");

if(togle1.checked){
    lampu1.src ="assets/images/lampu hidup.jpg";
}else{
    lampu1.src ="assets/images/lampu.jpg";   
}
if(togle2.checked){
    lampu2.src ="assets/images/lampu hidup.jpg";
}else{
    lampu2.src ="assets/images/lampu.jpg";   
}
if(togle3.checked){
    lampu3.src ="assets/images/lampu hidup.jpg";
}else{
    lampu3.src ="assets/images/lampu.jpg";   
}
if(togle4.checked){
    lampu4.src ="assets/images/lampu hidup.jpg";
}else{
    lampu4.src ="assets/images/lampu.jpg";   
}
}


//     if(action == "on"){
//         if (lamp == 1){
//         lampu1.src = "assets/images/lampu hidup.jpg";

//     }
//         if (lamp == 2){
//         lampu2.src = "assets/images/lampu hidup.jpg";

//     } 
//         if (lamp == 3){
//         lampu3.src = "assets/images/lampu hidup.jpg";

//     }
//         if (lamp == 4){
//         lampu4.src = "assets/images/lampu hidup.jpg";

//         }
//     }    
//     if(action == "off"){
//         if (lamp == 1){
//         lampu1.src = "assets/images/lampu.jpg";

//     }
//         if (lamp == 2){
//         lampu2.src = "assets/images/lampu.jpg";

//     } 
//         if (lamp == 3){
//         lampu3.src = "assets/images/lampu.jpg";

//     }
//         if (lamp == 4){
//         lampu4.src = "assets/images/lampu.jpg";
//      }
// }
// }


