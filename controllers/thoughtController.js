const {User, Thought} = require('../models')

module.exports = {
    getThoughts(req, res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    getOneThought(req, res) {
        Thought.findOne({_id: req.params.thoughtId})
        .then((thought) => (
            !thought 
            ? res.status(404).json({message: 'That thought does not exist'}) 
            : res.json(thought)
            )
        )
        .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },
        updateThought(req,res) {
        Thought.findOneAndUpdate(

        )
    },
        deleteThought(req, res) {
        Thought.findOneAndRemove(

        )
    },
}
