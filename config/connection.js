const {connection, connect} = require('mongoose');

const connectionDB = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/networkingDB'

connect(connectionDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;