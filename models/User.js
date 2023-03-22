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
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Thought',
            },
        ],
        friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User',
            },
        ],
    },
        {
            toJSON: {
              virtuals: true,  
            },
            id: false,
        },
);


userSchema.virtual('friendsCount').get(function () {
    return this.friends.legnth;
});

const User = model('user', userSchema);


module.exports = User;


