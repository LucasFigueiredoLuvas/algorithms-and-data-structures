const Queue = require('./queue/queue');

function hotPotato(players, num) {
    const queue = new Queue();
    const eliminatedList = [];
    // Enfileirando jogadores
    for(let index = 0; index < players.length; index++) {
        queue.enqueue(players[index]);
    }
    // Implementando lista circular, adicionando 
    // os eliminados à lista até que sobre um (vencedor)
    while(queue.size() > 1) {
        for(let index = 0; index < num; index++) {
            queue.enqueue(queue.dequeue()); // Circular
        }
        eliminatedList.push(queue.dequeue());
    }
    return { eliminateds: eliminatedList, winner: queue.dequeue() };
}

//modulplayersorts = hotPotato();queue.enqueue(players[index]);

const names = ['Smith', 'Jack', 'Josbaldo', 'Ari', 'Mendel', 'Josbeldon'];
const start = hotPotato(names, 7);

start.eliminateds.forEach(name => console.log(`X - ${name} has ben eliminated! - X`));
console.log(`* - ${start.winner} is winner! - *`);