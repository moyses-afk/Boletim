SE media >= 7 ENTÃO
        ESCREVA "Aprovado"
    SENÃO
        ESCREVA "Reprovado"

nomes ← ["joao", "ana", "maria", "jose", "gabriel", "lucas"]
    notas ← [6, 5, 7, 8, 9, 4]

    PARA i DE 0 ATÉ 5 FAÇA
        SE notas[i] >= 6 ENTÃO
            ESCREVA nomes[i] + " aprovado"
        SENÃO
            ESCREVA nomes[i] + " reprovado"
Sim, dá para escrever o bloco uma vez só e usar nos 6 alunos.Quando a gente coloca os nomes e as notas em listas, o computador consegue “passar” por cada aluno usando uma estrutura de repetição (o PARA ou for). Assim, o mesmo SE é executado várias vezes, uma para cada posição da lista, sem precisar copiar o código 6 vezes.
