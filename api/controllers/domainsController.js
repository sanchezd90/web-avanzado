const Domain = require('../models/domainModel')
const { validationResult } = require('express-validator');

const create = async (req,res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({errores: error.array()})
    }
    try{
      const {en, es} = req.body;        
        
        let domain = await Domain.findOne({en});        
        if (domain) {
            return res.status(400).json({message : 'This domain is already registered'})
        }
        domain = new Domain(req.body);
        await domain.save()
        res.status(200).json(domain)
        
    }catch(error){
      console.log(error);
      res.status(400).send("Domain register error")  
    }    
} 

const getAll = async (req,res) => {
  try{
    const all = await Domain.find({deleted:"0"});
    res.status(200).json(all);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const getSingle = async (req,res) => {
  const id = req.params.id;
  try{
    const domain = await Domain.findById(id);
    if(domain.deleted==="0"){
      res.status(200).json(domain);
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
    const domain = req.body;
    delete domain["_id"];       
    const response = await Domain.replaceOne({_id:_id['$oid']},domain);    
    res.status(200).json(response)
      
  }catch(error){
    console.log(error);
    res.status(500).send("update error")  
  }    
} 

const del = async (req,res) => {
  const id = req.params.id;
  try{                        
    const response = await Domain.updateOne({_id:id},{deleted:"1"});    
    res.status(200).json(response)
      
  }catch(error){
    console.log(error);
    res.status(500).send("delete error")  
  }    
} 

module.exports = {create,getAll,getSingle,update,del}