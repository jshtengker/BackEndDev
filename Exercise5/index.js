const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const bodyParser = require('body-parser')
const path = require("path")
const multer = require("multer")
const upload = multer({ dest: "Resources" })
const fs = require("fs")

// MIDDLEWARE UNTUK REQUEST BODY

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use((req, res, next) => {
//     console.log('Logging the request')
//     next()
// })

// // sending data
// app.get('/user/add', (req, res) => {
//     res.send(`<form method="POST">
//     <div><input name='username'/></div>
//     <div><button>Add User</button></div>
//     </form>`)
// });

// app.post('/user/add', (req, res) => {
//     console.log(req.body);
//     console.log("Post request") 
//     res.redirect('/');
// })

// MIDDLEWARE UNTUK FILE STATIC

// app.use(express.static(path.join(__dirname, "Resources")));

// MIDDLEWARE UNTUK UPLOAD FILE

app.post("/upload", upload.single("file"), (req, res) => {
    const file = req.file;
    if (file) {
        const target = path.join(__dirname, "Resources", file.originalname);
        fs.renameSync(file.path, target)
        res.send("file berhasil diupload")
    } else {
        res.send("file gagal diupload")
    }
})

// app.post("/upload", upload.single("file"), (req, res) => {
//     res.send(req.file);
// })

// app.use('/', (req, res, next) => {
//     res.send('This is the home page');
// });



app.listen(port, () => 
    console.log(`Server running at https://localhost:${port}`)
);