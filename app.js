const express = require('express')
const port = process.env.PORT || 3000
const app = express()

app.get('',(req,res)=>{
    res.send({
        name : "Western Biofuel server"
    })
})

app.listen(port,() => {
  console.log(`Server running at port `+port);
});