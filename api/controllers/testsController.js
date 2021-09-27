const Test = require('../models/testModel')
const { validationResult } = require('express-validator');

const create = async (req,res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
      return res.status(400).json({errores: error.array()})
  }
  try{
    const {nombre_principal} = req.body;        
      
      let test = await Test.findOne({nombre_principal});        
      if (test) {
          return res.status(400).json({message : 'This test is already registered'})
      }
      test = new Test(req.body);
      await test.save()
      res.status(200).json(test)
      
  }catch(error){
    console.log(error);
    res.status(400).send("Test register error")  
  }    
} 

const getAll = async (req,res) => {
  try{
    const all = await Test.find({deleted:"0"});
    res.status(200).json(all);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const getSingle = async (req,res) => {
  const id = req.params.id;
  try{
    const test = await Test.findById(id);
    if(test.deleted==="0"){
      res.status(200).json(test);
    }else{
      res.status(200).json({msg:'deleted'});
    }
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const update = async (req,res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
      return res.status(400).json({errores: error.array()})
  }
  try{    
    const {_id} = req.body;        
    const test = req.body;
    delete test["_id"];       
    const response = await Test.replaceOne({_id:_id['$oid']},test);    
    res.status(200).json(response)
      
  }catch(error){
    console.log(error);
    res.status(400).send("update error")  
  }    
} 

const del = async (req,res) => {
  const id = req.params.id;
  try{                        
    const test = await Test.updateOne({_id:id},{deleted:"1"});    
    res.status(200).json(test)
      
  }catch(error){
    console.log(error);
    res.status(400).send("delete error")  
  }    
} 

module.exports = {create,getAll,getSingle,update,del}