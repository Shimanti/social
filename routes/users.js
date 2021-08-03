const router = require("express").Router()

router.get('/', (req,res)=>{
  res.send("It's the Users route")
})

module.exports = router
