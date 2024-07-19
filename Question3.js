const people = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'Alic', lastName: 'Smith' },
];

function AlphaNames(arr) {
    const fullNames= arr.map(person => `${person.firstName} ${person.lastName}`);
    fullNames.sort((a,b)=> a.localeCompare(b));
    return fullNames;
}
console.log(AlphaNames(people));