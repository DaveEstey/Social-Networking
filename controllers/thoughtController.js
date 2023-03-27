const { Thought, User } = require('../models')

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) => (
                !thought
                    ? res.status(404).json({ message: 'That thought does not exist' })
                    : res.json(thought)
            )
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => !dbThoughtData ? res.status(404).json('User not found')
                : User.findOneAndUpdate({ _id: req.body.userId },
                    { $addToSet: { thoughts: dbThoughtData._id } },
                    { runValidators: true, new: true },
                ))
            .then(() => res.json({ message: 'Your thought has been added' }))
            .catch((err) => res.status(500).json(err));  
          
    },
    
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId },
            { $set: req.body},
            { runValidators: true, new: true },
        )
    .then(() => res.json({ message: 'Your thought has been updated' }))
    .catch((err) => res.status(500).json(err));
    },

    deleteThought(req, res) {
        Thought.findOneAndRemove({_id: req.params.thoughtId})
        .then(() => res.json({ message:'Your thought has been deleted' }))
        .catch((err) => res.status(500).json(err));
    },
    addReaction(req, res) {
        
    },

    deleteReaction(req, res) {

    }
}
