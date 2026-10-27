const nomes = ["joao", "ana", "maria", "jose", "gabriel", "lucas"];
const notas = [6, 5, 7, 8, 9, 4];

for (let i = 0; i < nomes.length; i++) {
    if (notas[i] >= 6) {
        console.log(nomes[i] + "\naprovado");
    } else {
        console.log(nomes[i] + "\nreprovado");
    }
}