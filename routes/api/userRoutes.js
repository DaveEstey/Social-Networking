const router = require('express').Router();
const { 
    getUsers, getOneUser, createUser, addFriend, removeFriend, deleteUser
} 
= require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getOneUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').put(addFriend).delete(removeFriend)

module.exports = router;