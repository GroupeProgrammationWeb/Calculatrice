/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function print(a){
    document.getElementById("ecran").value = document.getElementById("ecran").value + a; 
}

function result(chaine){
    
}

function reset(){
    document.getElementById("ecran").value = "0";
}

function backspace(){
    document.getElementById("ecran").value = document.getElementById("ecran").value.toString().substr(0, document.getElementById("ecran").value.toString().length-1);
}