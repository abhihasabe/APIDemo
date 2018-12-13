const expess= require("express");
const app =expess();
const port = process.env.port || 3000;
app.get('/',(req, res)=>res.send('Welcome to Node API'));
app.listen(port,()=>console.log('Server is running on port'+port));