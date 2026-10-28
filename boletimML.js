const nomes = ["joao", "ana", "maria", "jose", "gabriel", "lucas"];
const notas = [6, 5, 7, 8, 9, 4];

console.log("\nnome 3: "+ nomes[3]+"\nnotas: "+notas[3]);

for (let i = 0; i < nomes.length; i++) {
    if (notas[i] >= 6) {
        console.log(nomes[i] + "aprovado");
    } else {
        console.log(nomes[i] + "\nreprovado");
    }
}
