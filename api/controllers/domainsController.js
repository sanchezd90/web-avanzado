

const createDomain = (req,res) => {
    console.log(req.body);
    res.end();
} 

const getAll = (req,res) => {    
    res.json({msg:'Holas'});
  }


module.exports = {createDomain,getAll}