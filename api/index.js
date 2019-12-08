const express = require('express');
const app = express();
const userRouter=require("./routes/user.router")





app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/user',userRouter)
app.get('/', (req, res) => { 
    res.send('Homepage! Hello world.');
  });

app.use((req,res) => 
res.status(404).send(`<h1>Cannot find what you're looking for`))
app.listen(3000, () => console.log('listening on port 3000')); 
