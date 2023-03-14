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
            date: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
);


userSchema.virtual('reactionCount', function (reactions) {
    return reactions.legnth;
}) 

const User = new model('user', userSchema);


module.exports = User;


