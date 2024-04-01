const express = require('express');
const app = express();
const port = 7171;

app.use(express.json());

app.get('/getAllUsers', (req, response) => {
    const payload = [
        { id: 1, user: "Alex", pass: "123"},
        { id: 2, user: "Nika", pass: "123"},
        { id: 3, user: "Sasha", pass: "123"},
        { id: 4, user: "Oleg", pass: "123"},
        { id: 5, user: "Lexa", pass: "123"},
    ];
    response.end(JSON.stringify(payload));
});

app.post('/register', (req, response) => {
    const payload = req.body;
    const result = { isSuccess: false, payload: payload };
    response.end(JSON.stringify(result));
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});