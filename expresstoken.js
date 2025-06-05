const express =require("express");
const app = express();
app.use(express.json());

// const token = (req,res,next)=>{
//     if(req.query.token==="1234567890"){
//         console.log("token");
//         console.log(req.query.token);
//         next();
//     }else{
//         res.status(401).send({error:"please provide a valid token"});
//     }
// };
// app.use((req,res,next)=>{
//     if(req.query.token !=="1234567890"){
//         res.status(401).send({error:"please provide a valid token"});
//     }else if(req.query.pass!=="1234567891"){
//         res.status(401).send({error:"please provide a valid pass"});
//     }else if(req.query.email!=="ranjeetmaurya@gmail.com"){
//         res.status(401).send({error:"please provide a valid email"});
//     }else{
//         next();
//     }
// });
app.use((req, res, next) => {
    const { token, pass, email } = req.query;
    if (token !== "1234567890") {
        return res.status(401).send({ error: "please provide a valid token" });
    }
    if (pass !== "1234567891") {
        return res.status(401).send({ error: "please provide a valid pass" });
    }
    if (email !== "ranjeetmaurya@gmail.com") {
        return res.status(401).send({ error: "please provide a valid email" });
    }
    next();
});

app.get('/',(req,res)=>{
    res.send("this is me");
})

app.get('/home', (req, res) => {
    res.send("this is home page");
});
app.get('/:id', (req, res) => {
    let id = req.params.id;
    let token = req.query.token;
    res.send(`<h1>Home Page ${id} ${token}</h1>`);
});

app.listen(4000);