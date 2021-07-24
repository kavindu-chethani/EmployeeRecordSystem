const express= require('express');
const { isValidObjectId } = require('mongoose');
var router = express.Router();
var {Employee}=require('../models/employee');
var ObjectId=require('mongoose').Types.ObjectId;



//get request
//=> localhost:3000/employee/ in here we retrive all the employees from the mongo db collection

 router.get('/', (req, res) =>{
     Employee.find (( err,docs )=>{    // all the employees find from employee table
         if(!err) { res.send(docs);} 
         else{console.log('Error in Retriving Employees:' + JSON.stringify(err, undefined,2));
        } 
     });
 });

 router.get('/:id',  (req, res) =>{ //create and employee modle class
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}');

    Employee.findById(req.params.id, (err,docs)=>{    // all the employees find from employee table
        if(!err) {res.send(docs);} 
        else{console.log('Error in Retriving Employees:' + JSON.stringify(err, undefined,2));}
    });
    });

//post req
router.post('/',  (req, res) =>{ 
    var emp= new Employee({//create and employee model class
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });

    emp.save(( err,docs )=>{
        if(!err) { res.send(docs);} 
        else{console.log('Error in Employee save:' + JSON.stringify(err, undefined,2));
       }    
    });
});

//update function-we use put request
router.put('/:id',  (req, res) =>{ //create and employee modle class
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}');

    // created a normal object here
    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id, {$set:emp},{new: true},(err, doc)=>{
        if(!err) { res.send(docs);} 
        else{console.log('Error in Employee update:' + JSON.stringify(err, undefined,2));
       }    
    }); 
});

//delete 
router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record with given id: ${req.params.id}');
Employee.findByIdAndRemove(req.params.id, (err,doc)=>{
    if(!err){res.send(doc);}
    else{console.log('Error in Employee Delete:' + JSON.stringify(err,undefined,2));}
});
});


//export get, post, put request using router variable

module.exports=router;
