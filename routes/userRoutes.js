const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router.get('/', userController.getUsers);
router.post('/add-user', userController.addUser);
router.get('/edit-user/:id', userController.getEditUser);
router.post('/edit-user/:id', userController.editUser);
router.get('/delete-user/:id', userController.deleteUser);
module.exports = router;
