const { EventEmitter } = require('events');

// instancia um objeto da classe EventEmitter
const ev = new EventEmitter();

// escuta o evento
ev.on('saySomething', data => {
    console.log('Ouvi a mensagem', data);
})

// escuta o evento somente uma vez
ev.once('saySomething', data => {
    console.log('Ouvi a mensagem2   ', data);
})

// emite o evento
ev.emit('saySomething', "Meansagem de voz");
ev.emit('saySomething', "Meansagem de voz");

// PARTE 2 //

const { inherits } = require('util');

function Character(name) {
    this.name = name;
}

// herdando para Character todas as funções de EventEmitter
inherits(Character, EventEmitter);

const ouvinte = new Character('Ouvinte');
ouvinte.on('help', () => console.log(`O ${ouvinte.name} está ouvindo o evento`));

console.log('Disparando o evento');
ouvinte.emit('help')
