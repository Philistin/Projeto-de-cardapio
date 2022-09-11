const { response } = require('express')
const express  =require('express')
const mongoose = require('mongoose')
const produtos = require('./models/produtos')
const db = mongoose.Connection
const app = express();
app.set('view engine', 'ejs');


const port = process.env.PORT || 5000
app.use(express.json())

app.get('/',(req, res) => {
   res.render('index') 
})
app.post('/cadastro', async(req, res) =>{
    const {categoria, nome, sabor, preço}  = req.body
    console.log(req.body)
    if(!categoria){
        res.status(422).json({msg:'categoria é obrigatório'})
    }
    if(!nome){
        res.status(422).json({msg:'O nome é obrigatório'})
    }
    if(!preço){
        res.status(422).json({msg:'O preço é obrigatório'})
    }
    if(!sabor){
        res.status(422).json({msg:'O sabor é obrigatório'})
    }
try {
 const produtos = await Produtos.create({categoria,nome,sabor,preço})
  res.status(200).json({msg:'Produto criado com sucesso'})
} catch (error) {
    res.status(500).json({msg:'Aconteceu error no servidor'})
    
}

})
app.get("/lista", async (req, res
    )=>{
        const produtos = await Produtos.find();
    res.send(data);
})

app.put("/Update/: _id", async (req, res ) => {
    console.log(req.params)
    const produto =  await Produto.updateOne(
        req.params,
    {$set: req.body}
        );
  res.status(201).json({msg:'Produto atualizado com sucesso'})
 })

 app.delete("/delete/: _id", async (req, res )=>{
    console.log(req.params)
    const produtos = await Produtos.deleteOne(req.params);
  res.res.status(201).json({msg:'Produto deletado com sucesso'})
 })
 
const dbUser= process.env.DB_USER
const dbPass = process.env.DB_PASS
mongoose.connect (`mongodb+srv://${dbUser}:${dbPass}@cluster1.xppiijw.mongodb.net/?retryWrites=true&w=majority`).then(() =>{
    app.listen (port,() =>{
        console.log('Servidor rodando ' + port)
    })
    
}).catch((error)=>{
    console.log(error)
})