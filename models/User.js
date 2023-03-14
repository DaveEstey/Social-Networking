const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            max_length: 50,
            
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: /.+\@.+\..+/,
        },
        thoughts: [thoughtSchema],
        friends: [this.friends],
    },
);


userSchema.virtual('friendsCount', function (friends) {
    return friends.legnth;
}) 

const User = new model('user', userSchema);


module.exports = User;


