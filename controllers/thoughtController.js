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
                : User.findOneAndUpdate({ username: dbThoughtData.userId },
                    { $addToSet: { thoughts: dbThoughtData.body } },
                    { runValidators: true, new: true },
                ))
            .then(() => res.json({ message: 'your thought has been added' }))
            .catch((err) => res.status(500).json(err));  
          
    },
    updateThought(req, res) {
        Thought.findOneAndUpdate(

        )
    },
    deleteThought(req, res) {
        Thought.findOneAndRemove(

        )
    },
}
