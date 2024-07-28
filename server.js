const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");
const Productroute=require("./routes/Productroute");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
    app.listen(4000, () => {
      console.log("hello from node api");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });

app.use("/api/products",Productroute);

// app.post("/api/products", async (req, res) => {
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await Product.find({});
//     res.status(200).json(products);
//     console.log(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.patch("/api/products/:id",async (req,res)=>{
//   try {
//     const {id}=req.params;
//     const product=await Product.findByIdAndUpdate(id,req.body);
//     if(!product){
//       return res.status(404).json({message:"the product not found"})
//     }
//     const updatedproduct=await Product.findById(id);
//     res.status(200).json(updatedproduct);
//   } catch (error) {
//     res.send(500).json({message:error.message});
    
//   }
  
// })

// app.delete("/api/products/:id",async (req,res)=>{
//   try {
//     const {id}=req.params;
//     const product=await Product.findByIdAndDelete(id);
//     if(!product){
//       res.status(404).json({message:"product not found"});
//     }
//     res.status(200).json({message:"product deleted successfully"});
    
//   } catch (error) {
//     res.status(500).json({message:error.message});
    
//   }
// })

app.get("/", (req, res) => {
  res.send("hi from the node API server test with nodemon");
});
