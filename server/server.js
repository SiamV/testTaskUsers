import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import config from "./config.js";
import routerUsers from "./routes/routerUsers.js"

const app = express();

const middleware = [
    cors()
]
middleware.forEach((it) => app.use(it))

const userSchema = new mongoose.Schema({
    "username": {
        type: String,
        require: true
    },
    "email": {
        type: String,
        require: true
    },
    "password": {
        type: String,
        require: true
    },
    "register_date": {
        type: String,
        require: true
    },
}, {
    versionKey: false
})


//connect to MongoDB
const url = config.url;
mongoose.connection.on('connected', () => {
    console.log('DB is connected')
});
mongoose.connection.on('error', (err) => {
    console.log(`cannot connect to db ${err}`)
    process.exit(1)
});
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(config.port, () => {
        console.log(`server is working http://localhost:${config.port}. Project in development `)
    });
})

//create collection DB

export const User = mongoose.model('users', userSchema);

app.use('', routerUsers);
