const express = require('express');
const {AddUser,FindAllUsers,FindSinglUser,UpdateUser,DeleteUser}= require("../controller/users.contoller")
const router = express.Router();
 
/*add user */
router.post('/users',AddUser)
/*find all user */
router.get('/users',  FindAllUsers)
/*find single user */
router.get('/users/:id',FindSinglUser)
/*update user */
router.put('/users/:id',UpdateUser)
 /*delete user */
router.delete('/users/:id',DeleteUser)
module.exports=router;