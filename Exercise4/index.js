const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const users = require('./users')


app.use(morgan("dev"));

app.get("/users", (req, res) => res.json({
    users
}));

app.get('/users/:name', (req, res) => {
    const {name} = req.params;
    const user = users.find(user => user.name.toLowerCase() === name.toLowerCase());

    if (!user) {
        return res.json({
            message: 'data tidak ditemukan'
        })
    }

    res.json(user);
})

app.use((req, res) => {
    res.status(404).json({
        status: "error",
        message: "resource tidak ditemukan",
    })
})

app.use((req, res) => {
    res.json({
        status: "error",
        message: "terjadi kesalahan pada server",
    })
})

app.listen(port, () => 
    console.log(`Server running at https://localhost:${port}`)
);