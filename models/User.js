const { Schema, model } = require('mongoose');

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
        thoughts: [{
            type:Schema.Types.ObjectId,
            ref:'Thought'
            }
        ],
    },
);


userSchema.virtual('friendsCount', function (friends) {
    return friends.legnth;
}) 

const User = new model('user', userSchema);


module.exports = User;


