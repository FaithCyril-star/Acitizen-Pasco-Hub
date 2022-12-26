const express = require("express");
const router = express.Router();

const testApi = require('../endpoints/testApi');

//base route to use this endpoint(get)
router.get("/", function (req, res, next) {
    testApi.get(req,res);
});

//base route to use this endpoint(create)
router.post("/",function(req,res,next){
    testApi.create(req,res);
})



module.exports = router;
