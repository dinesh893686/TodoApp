const express= require('express')
const app =express()
const port=8000




// setting our view engine ejs
app.set('view engine','ejs')
app.set('path','views')
app.use(express.static('assets'));
// adding router 
app.use('/',require('./Routes'))

app.listen(port,function(err)
{
    if(err)
    {
        console.log(`Error:${err}`)
    }
    else
    {
        console.log(`server is up and running on port:${port}`)
    }
})