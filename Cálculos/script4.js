function Mostrar(){
    let A = parseInt(document.querySelector(".valor-1").value);
    let B = parseInt(document.querySelector(".valor-2").value);


    document.querySelector(".valor").innerHTML = A * B;
}