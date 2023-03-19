const router = require('express').Router();
const { 
    getUsers, getOneUser, createUser, addFriend
} 
= require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getOneUser);

router.route('/:friendId').put(addFriend)

module.exports = router;