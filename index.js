const express= require('express')
const app =express()
const port=8000




// setting our view engine ejs

app.use(express.urlencoded({
    extended: true
}));
const db = require('./config/mongoose');



const TodoSchema = require("./models/schema")
app.set('view engine','ejs')
app.set('path','views')
app.use(express.static('assets'));
// adding router 
app.use('/',require('./Routes'))

app.post('/submit-form',function(req,res)
{
    console.log(req.body);

     TodoSchema.create(
         {
             description:req.body.description,
             category: req.body.category,
             dueDate:req.body.dueDate   
         },
         function(err,TodoList)
         {
             if(err)
            {
                console.log(err);
                    return;
            }
            else 
            {
                console.log(TodoList);
                return res.redirect('back');

            }
         }
      


     )
})

// app.get('/')
// app.get()

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