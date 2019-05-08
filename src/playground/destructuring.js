// const person = {
//     name: 'Mauricio',
//     age: 22,
//     location: {
//         city: 'Tegucigalpa',
//         temp: 24
//     }
// }

// const { name, age } = person;
// const { city, temp } = person.location;

// console.log(`${name} is ${age}, he lives at ${city}`);

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { title, author } = book;
const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(`${title} by ${author} is published by ${publisherName}`);