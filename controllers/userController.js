const {User, Thought} = require('../models')

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    
    getOneUser(req, res) {
        User.findOne({_id: req.params.userId})
        .then(async (user) => (
            !user 
            ? res.status(404).json({message: 'That user does not exist'}) 
            : res.json({user, friendsCount: user.friends.length}) 
            )
        )
        .catch((err) => res.status(500).json(err));
    },
    
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },
    
    updateUser(req,res) {
        User.findOneAndUpdate({_id: req.params.userId},
            {$set: {friends: req.body.friends} }, 
            {runValidators: true, new: true })
        .then((user) => !user ? res.status(404).json('User not found') 
        : res.json(user))
        .catch((err) => res.status(500).json(err));

    },
    
    deleteUser(req, res) {
        User.findOneAndRemove({_id: req.params.userId})
            .then((user) => !user ? res.status(404).json('User not found') 
            : Thought.deleteMany({_id: req.params.userId}))
            .then((thought) => !thought ? res.status(404).json('thoughts not found') 
            : res.json({message: 'The user and his/her thoughts were deleted'})) 
            .catch((err) => res.status(500).json(err));
            
    },

    addFriend(req, res){
            User.findOneAndUpdate({_id : req.params.userId}, 
                {$addToSet: {friends: req.params.friendId} }, 
                {runValidators: true, new: true })
            .then((user) => !user ? res.status(404).json('User not found') 
            : res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res){
            User.findOneAndUpdate( {_id : req.params.userId}, 
                {$pull: { friends: req.params.friendId }}, 
                {runValidators: true, new: true })
            .then((user) => !user ? res.status(404).json('User and/or friend not found') 
                : res.json(user))
            .catch((err) => res.status(500).json(err));
            
        }
}
