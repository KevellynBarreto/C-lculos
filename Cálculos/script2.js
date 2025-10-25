function Mostrar (){
    let raio = parseInt(document.querySelector(".valor-raio").value);
    let area = Math.PI.toFixed(5) * Math.pow(raio,2);

    document.querySelector(".resultado").innerHTML = area
    console.log(area)
}
