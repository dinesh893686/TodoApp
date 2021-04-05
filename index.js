const express= require('express')
const app =express()
const port=8000


app.use('/',require('./Routes'))

// setting our view engine ejs
app.set('view engine','ejs')
app.set('path','./views')
app.use(express.static('./assets'));


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