const Purpose = require('../models/purposeModel')
const { validationResult } = require('express-validator');

const create = async (req,res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
      return res.status(400).json({errores: error.array()})
  }
  try{
    const {en, es} = req.body;        
      
      let purpose = await Purpose.findOne({en});        
      if (purpose) {
          return res.status(400).json({message : 'This purpose is already registered'})
      }
      purpose = new Purpose(req.body);
      await purpose.save()
      res.status(200).json(purpose)
      
  }catch(error){
    console.log(error);
    res.status(400).send("Purpose register error")  
  }    
} 

const getAll = async (req,res) => {
  try{
    const all = await Purpose.find({});
    res.status(200).json(all);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const getSingle = async (req,res) => {
  const id = req.params.id;
  try{
    const purpose = await Purpose.findById(id);
    res.status(200).json(purpose);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

module.exports = {create,getAll,getSingle}