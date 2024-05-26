const { Router } = require("express");
const mongodb = require('mongodb');
const router = Router();
const User = require("../models/user.model");
const Property = require("../models/property.model");

require("../db/conn")

router.post("/getallproperties", async (req, res) => {
    let data = await Property.find();
    res.status(200).json(data);
})

router.post("/signup", async (req, res) => {
    const user = req.body;
    console.log(user);
    
    try {
        await User.create(user).then((data) => {
            res.status(200).json("User Created");
        })
    } catch (err) {
        console.log(err);
        res.status(201).json("username or Email is already register");
    }
})
router.post("/login", async (req, res) => {
    const { email, password,usertype } = req.body;
    // console.log(req.body);
    try {
        await User.findOne({ email: email }).then(async (data) => {
            if (data !== null) {
                if (data.password === password ) {
                    if(data.usertype === usertype) res.status(200).json(data.id);
                    else res.status(201).json("Please select correct userType");;
                }
                else {
                    res.status(201).json("Please Enter Correct Password");
                }
            }
            else {
                res.status(201).json("User Not Found Please SignUp First");
            }
        })
    } catch (err) {
        console.log(err);
        res.status(201).json("Error in login");
    }
})

router.post("/addproperty", async (req, res) => {
    const {name,propimg,type,price,city,area,owner} = req.body
    console.log(req.body);
    
    try {
        const newProd = await Property.create({name,propimg,type,price, address : city ,area,owner});
        res.status(200).json("newProd Added");
    } catch (err) {
        console.log(err);
        res.status(201).json("Product Not Added");
    }

})

router.post("/getuser", async (req, res) => {
    const _id = req.body.rentifyuser;

    await User.findOne({ _id }).then((data) => {
        if (data) {
            res.status(200).json(data);
        }
        else {
            console.log('user not found');
            res.status(404);
        }
    }).catch((e) => {
        console.log(e);
        res.status(404);
    })

})
router.post("/seeProperty", async (req, res) => {
    const _id = req.body.id;

    await Property.findOne({ _id }).then((data) => {
        if (data) {
            res.status(200).json(data);
        }
        else {
            console.log('user not found');
            res.status(404);
        }
    }).catch((e) => {
        console.log(e);
        res.status(404);
    })

})

module.exports = router;