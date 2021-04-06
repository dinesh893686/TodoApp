const mongoose=require('mongoose');

const todoSchema = {
      description:{
         type:String,
         required:true
     },
     category:{
        type:String,
        required:true
     },
     dueDate:
     {
          type: Date,
          required:false

     }
   }

let TodoSchema =mongoose.model('TodoSchema', todoSchema);
module.exports=TodoSchema;
