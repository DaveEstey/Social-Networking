const {User, Thought} = require('../models')

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    
    getOneUser(req, res) {
        User.findOne({_id: req.params.userId})
        .then((user) => (
            !user 
            ? res.status(404).json({message: 'That user does not exist'}) 
            : res.json(user)
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



        )
    },
    
    deleteUser(req, res) {
        User.findOneAndRemove(

        )
    },

    addFriend(req, res){
            User.findOneAndUpdate({_id : req.params.userId}, 
                {$addToSet: {friends: req.body} }, 
                {runValidators: true, new: true })
            .then((user) => !user ? res.status(404).json('Friend not found') 
            : res.json(user));
    },

    removeFriend(req, res){
            User.findOneAndUpdate( {_id : req.params.userId}, 
                {$pull: { friends: req.body }}, 
                {runValidators: true, new: true })
            .then((user) => !user ? res.status(404).json('Friend not found') 
                : res.json(user))
            .catch((err) => res.status(500).json(err));
            
        }
}
