

const TodoSchema = require("../models/schema")

module.exports.home=function(req,res)
{
    TodoSchema.find({}, function (err, TodoDb) {
        if (err) {
            console.log(err);
        }
        else {

            return res.render('home', {

                // contact_List: TodoDb
                title:"TodoApp"
            }
            )
        }
    });
}
  
