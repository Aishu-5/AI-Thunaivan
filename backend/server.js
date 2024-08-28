require('dotenv').config()
const blogRoutes = require('./routes/blogs')
const express = require('express')
const mongoose = require('mongoose')
const roadmapRoutes = require('./routes/Roadmaps')
const app = express()

//middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.get('/', (req, res) => {
    res.json({ mssg: 'welcome to the app' })
})
app.get('/myassessment', (req, res) => {
    res.json({ mssg: "Please give assessment" })
})
app.use('/blogs', blogRoutes)
app.use('/roadmap', roadmapRoutes)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen on port 4000
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port 4000')
        })
    }).catch((error) => {
        console.log(error)
    })

