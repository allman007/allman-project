const express = require('express')
const app = express()
const mongoose = require('mongoose')
const mongoURI = require('./config').mongoURI

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//database connection
mongoose.connect(mongoURI, {useNewUrlParser: true,
useCreateIndex: true, useUnifiedTopology: true  }, ()=>{
 console.log('Connected to the database');
})

mongoose.set('useFindAndModify', false) //used because of deprecation issue

//routes
app.use('/api', require('./routes/post'))

if(process.env.NODE_ENV === 'production'){
	app.use(express.static('my-app/build'))
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'my-app', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`The server is running on port ${PORT}`))
