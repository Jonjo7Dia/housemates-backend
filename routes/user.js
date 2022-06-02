const {Router} = require('express');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck')
const router = Router();

router.get('/details', auth, roleCheck(['admin']), (req,res)=>{
    res.status(200).json({message: 'user authenticated.'});
});

module.exports = router;