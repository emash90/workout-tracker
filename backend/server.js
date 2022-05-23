const express = require ('express')
const { mongoose } = require('mongoose')
const app = express()
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')





app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false})) 

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/exercise', require('./routes/exerciseRoute'))


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