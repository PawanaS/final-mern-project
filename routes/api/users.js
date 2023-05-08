//* Routing Logic


const express = require('express');
const router = express.Router();
 const usersCtrl = require('../../controllers/api/users');




const ensureLoggedIn = require('../../config/ensureLoggedIn');
const {addUser,getUsers,getUser,editUser,deleteUser} = require ('../../controllers/api/users')


//* POST 
//router.post('/', usersCtrl.create);

router.post('/add',addUser);
router.get('/all',getUsers);
router.get('/:id', getUser);
router.post('/:id', editUser);
router.delete('/:id',deleteUser);
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);



module.exports = router;