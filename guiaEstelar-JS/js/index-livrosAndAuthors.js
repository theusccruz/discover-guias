const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos...",
                author: "T.Harv Eker",
            },
            {
               title: "O homem mais rico...",
               author: "George S...."
            },
            {
                title: "Pai rico, pai...",
                author: "Augusto Cury"
            },
        ],
    },
    {
        category: "Inteligência",
        books: [
            {
                title: "Os segredos 123...",
                author: "Matheus",
            },
            {
               title: "O homem mais rico 123...",
               author: "Augusto Cury"
            },
            {
                title: "Pai rico, pai 123...",
                author: "Robert 123....."
            },
        ],
    }
]
let totalCategories = booksByCategory.length;
console.log(totalCategories);

for (const category of booksByCategory) {
    console.log(`Total de livros na categoria ${category.category}: ${category.books.length}`);    
}

function coutAuthors() {
    let authors = [];

    for (const category of booksByCategory) {
        for (const book of category.books) {
            if (authors.indexOf(book.author) === -1) {
                authors.push(book.author)
            }            
        }
    }

    console.log(authors);
}

function bookAuthor(author) {
    let bookTitle = [];

    for (const category of booksByCategory) {
        for (const book of category.books) {
            if (book.author=== author) {
                bookTitle.push(book.title);                
            }            
        }
    }

    console.log(`Livro do Author ${author} ${bookTitle}`);
}

coutAuthors()
bookAuthor("Augusto Cury")