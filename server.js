const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    // Add more books as needed
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.post('/api/books/add', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.json({ message: 'Book added successfully' });
});

app.delete('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    books = books.filter(book => book.id !== bookId);
    res.json({ message: 'Book deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
