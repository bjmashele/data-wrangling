const faker = require('faker');


function generateBooks() {
    const numberOfBooks = 15;
    const books = []
    let book = {};
    let title = "";
    let author = "";
    let progress = 0
    for (let i = 0; i < numberOfBooks; i++) {
       book = {
           "title" : faker.name.jobTitle(),
           "author" : faker.name.lastName(),
           "progress" : 0
       }
       books.push(book)
    }
    console.log("BookS: ", books)
    return {"books": books}
};

module.exports = generateBooks;