let person = {
    first: 'Tom',
    last: 'Slick',
    hello: () => 'Hello from ' + this.first
};

console.log('An object ...', person);
console.log('First name is', person.first);
console.log('Last name is', person['last']);

delete person.last;
console.log('deleted last', person);
person.middle = 'H.';
console.log('added middle', person);

person.quack = function() {
    return "quack!";
}

console.log('added quack() method', person);
console.log('calling quack() on person', person.quack());



// Costruttore dell'oggetto "person"
// E' una funzione, come le altre, però inizia con la lettera maiuscola
// Esiste al di fuori della "classe", dell'oggetto
//
// Si capisce che è un costruttore perché al suo interno c'è la keyword "this",
// per cui è chiaro che si riferisce all'oggetto che sta creando.
function Person(first, last) {
    this.first = first;
    this.last = last;

    this.hello = function() {
        return 'Hello from ' + this.first;
    }
}

let p1 = new Person('Bob', 'Slowe');
let p2 = new Person('Tim', 'Hare');

console.log('A person ...', p1);
console.log(p2.hello());

// Changes and examples:
//
let p3 = new Person('Joe', function() {return 'Hello world!'});
let p4 = Object.create(p1);
let p5 = p1;

console.log('A strange person: ', p3);
console.log('A clone of ', p1.first, ': ', p4);
console.log('A clone of ', p1.first, ': ', p4);
console.log('Is ', p1.first, ' equal to its clones? ', p1 == p3, p1 == p4);