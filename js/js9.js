
let elementos = document.getElementById("milista").getElementsByTagName("li");


for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.color = "green";
}

alert("Los elementos de la lista ahora son de color verde");
