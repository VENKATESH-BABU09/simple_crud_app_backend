const express=require("express")
const router=express.Router();
const Product=require("../models/Product")
const {getallproducts,getproduct,createproduct,updateproduct,deleteproduct}=require("../controllers/Productcontroller")

router.get("/",getallproducts);
router.get("/:id",getproduct);
router.post("/",createproduct);
router.patch("/:id",updateproduct);
router.delete("/:id",deleteproduct);

module.exports=router;
