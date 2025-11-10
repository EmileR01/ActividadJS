
let personasRicas = [
    "Elon Musk",
    "Bernard Arnault y familia",
    "Jeff Bezos",
    "Mark Zuckerberg",
    "Larry Ellison",
    "Warren Buffett",
    "Bill Gates",
    "Steve Ballmer",
    "Mukesh Ambani",
    "Larry Page"
];


console.log("Las 10 personas más ricas del mundo son:");
for (let i = 0; i < personasRicas.length; i++) {
    console.log((i + 1) + ". " + personasRicas[i]);
}

let lista = document.getElementById("listaRicos");
for (let i = 0; i < personasRicas.length; i++) {
    let item = document.createElement("li");
    item.textContent = personasRicas[i];
    lista.appendChild(item);
}
