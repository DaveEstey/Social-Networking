const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280,
            
        },
        createdAt: {
            date: { type: Date, default: Date.now }
        },
        username: {
            type: String,
            required: true,
        },
       reactions: [reactionSchema],
    },
);


thoughtSchema.virtual('reactionCount', function (reactions) {
    return reactions.legnth;
}) 

const Thought = new model('thought', thoughtSchema);


module.exports = Thought;


