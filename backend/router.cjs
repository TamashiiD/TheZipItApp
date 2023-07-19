const router = require('express').Router()
const App = require('./models.cjs')


// Routes
router.get('/', (req, res) => {
  App.get()
  .then(text => {
    res.status(200).json(text)
})
.catch(err=>{
    next(err)
})
});

router.post('/', (req, res)=>{
  
  const feelingvalue = req.body
  App.insert(feelingvalue)
  .then(inserted=> {
    res.status(200).json(inserted)
  })
  .catch(err=> {
    res.status(500).json({message: err.message})
  })
})



router.put('/', (req, res)=> {
  App.edit(req.body.id, req.body)
  .then(changed=> {
    res.status(200).json(changed)
  })
  .catch(err=> {
    res.status(500).json({message: err.message})
  })
})

router.delete('/', (req, res)=> {
  App.remove(req.body.id)
  .then(changed=> {
    res.status(200).json(changed)
  })
  .catch(err=> {
    res.status(500).json({message: err.message})
  })
})

module.exports = router; 
