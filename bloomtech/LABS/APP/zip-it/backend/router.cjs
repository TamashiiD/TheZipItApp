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


module.exports = router; 
