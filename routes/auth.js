const router = require('express').Router();
const {User} = require('../models/user');
const bcrypt = require('bcrypt'); 
const {validate }=  require('../utils/validationSchema');
const generateTokens = require('../utils/generateToken');
router.post('/', async (req,res) => {
    try {
        const {error} = validate(req.body);
        console.log('username', req.body);
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        const user = await User.findOne({email: req.body.email});
        if(!user){
            return res.status(401).send({message: 'Invalid Email or Password'});
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.status(401).send({message: 'Invalid Email or Password'})
        }
        const {accessToken, refreshToken} = await generateTokens(user);
        res.status(200).send({accessToken, refreshToken, message: 'Logged in successfully'});
    } catch (error) {
        res.status(500).send({message: 'Internal Server Error'})
        console.log(error);
    }
});



module.exports = router;