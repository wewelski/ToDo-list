
let input = prompt('What would like to do?');
const todos = [];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('======================');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}. ${todos[i]}`)
        }
        console.log('======================');
    } else if (input === 'new') {
        const newTodo = prompt('Ayt. What is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} has been added!`);
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ayt. Enter an index to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index,1);
            console.log(`OK, deleted ${deleted[0]}`);
        } else {
            console.log('Not a valid index');
        }
    }
    input = prompt('What would like to do?');
};

console.log('Ayt, you exited the app.')