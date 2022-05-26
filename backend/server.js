const express = require ('express')
const app = express()
const { mongoose } = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')





app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false})) 

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/exercise', require('./routes/exerciseRoute'))

if(process.env.NODE_ENV === 'production'){app.use(express.static(path.join(__dirname, '../frontend/build')))} else {
    app.get('/', (req, res) => {
        res.send('set to "production"')
    })
}
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

port = process.env.PORT || 3500

mongoose.connect(process.env.MONGO_URI, {

} )
.then((result) => {
     app.listen(port, () => {
        console.log(`connected to the db, listening on port ${port}...`);
    })
})
.catch((error) => {
    console.log(error);
})