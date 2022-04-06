const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('pass-it-around open on port 3000')
})

app.get("/",(req,res)=>{
    res.send(`<html>
    <body>
        <h1>99 little bugs in the code</h1>
        <a href="/98">Take on down, Patch it around</a>
    </body>
</html>`)
})

app.get("/:number_of_bottles",(req,res)=>{
    const randomAmt = Math.floor(Math.random() * 10)
    const randomChance = Math.random()*100;
    const currentQty = parseInt(req.params.number_of_bottles)
    const nextQty = currentQty-1
    const randomAdd = currentQty+randomAmt
    if (currentQty >0 && randomChance<80) {
        res.send(`<html>
        <body>
            <h1>${currentQty} little bugs in the code</h1>
            <a href="/${nextQty}">Take on down, Patch it around</a>
        </body>
    </html>`)  
    }else if(currentQty >0 && randomChance>80){
        res.send(`<html>
        <body>
            <h1>${currentQty} little bugs in the code</h1>
            <a href="/${randomAdd}">Oh no! Found ${randomAmt} More bugs!</a>
        </body>
    </html>`)  
    }else{
        res.send(`<html>
        <body>
            <h1>0 little bugs in the code</h1>
            <a href="/">Start Over</a>
        </body>
    </html>`)  
}})
