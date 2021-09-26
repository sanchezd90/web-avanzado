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
    const all = await Domain.find({});
    res.status(200).json(all);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

const getSingle = async (req,res) => {
  const id = req.params.id;
  try{
    const domain = await Domain.findById(id);
    res.status(200).json(domain);
  }catch(error){
    res.status(500).json({'error':error});
  }
}

module.exports = {create,getAll,getSingle}