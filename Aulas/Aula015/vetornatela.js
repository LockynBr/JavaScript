let num = [8, 1, 7, 4, 2, 9]

// for(let i = 0; i < num.length; i++) {
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
// }

// Forma simplificada de fazer uma leitura da array com for simplificado.
for(let i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
