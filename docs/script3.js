/*var A = parseInt(prompt());
let B= parseInt(prompt());

var X = A + B; 

 

console.log("X = "+ X);
*/




 function Mostrar(){

    var valorA = parseInt(document.querySelector('.Pvalor-A').value) 
    var valorB = parseInt(document.querySelector('.Pvalor-B').value)
    var X = valorA + valorB;
    document.querySelector('.resultado').innerHTML = "O resultado é: " + X
    console.log(valorA + valorB);
    
}