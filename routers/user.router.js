const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller.js')

router.route('/')
    .get(userController.index)  // get all
    .post(userController.newUser) // 

router.route('/login')
    .post(userController.login)

router.route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

router.route('/:id/bill')
    .get(userController.getUserBill)

router.route('/:id/changePassword')
    .post(userController.changePassUser)

module.exports = router;