const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000
const bodyParser = require('body-parser')
const path = require("path")
const multer = require("multer")
const cors = require('cors')

// const upload = multer({ dest: "uploads/" })
// const fs = require("fs")

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

// app.post("/upload", upload.single("bg.jpg"), (req, res) => {
//     const file = req.file;
//     if (file) {
//         const target = path.join(__dirname, "Resources", file.originalname);
//         fs.renameSync(file.path, target)
//         res.send("file berhasil diupload")
//     } else {
//         res.send("file gagal diupload")
//     }
// })

// Other method

// const storage = multer.diskStorage({
//     destination: function (req, file, cb){
//         cb(null, '/uploads');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//         },
//     });

// const upload = multer({ storage: storage })


// app.post('/upload', upload.single('file'), (req, res) => {
//     res.json(req.file);
// })


// MIDDLEWARE UNTUK PENANGANAN CORS

// penggunaan middleware CORS
// app.use(cors())

// // data yang akan diakses dari client
// app.get('/', (req, res) => res.json({data: 'Secret data'}))



app.listen(port, () => 
    console.log(`Server running at https://localhost:${port}`)
);