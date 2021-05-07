const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
];
const ask = (index = 0) => {
    // stdout escreve algo na saída do terminal
    // console.log() usa isso por debaixo dos panos
    process.stdout.write("\n" + questions[index] + " > ");
}

ask();

const answers = [];
// stdin.on() ouve eventos
// enquanto tiver data ele será acionado 
// ou seja, ouve a entrada de dados
// é o addEventListener com entrada do Node kkkkkkkkk
process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
});

// on() escuta eventos
process.on('exit', () => {
    console.log(`
        Bacana Matheus

        Hoje vc aprendeu:
        ${answers[0]}

        O que te aborreceu e vc poderia melhorar foi:
        ${answers[1]}

        O que te deixou feliz:
        ${answers}

        Vc ajudou ${answers[3]} pessoas hoje.
    `);
});

