require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const todosRoute = require('./routes/todos');


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.use('/api/todos', todosRoute);


app.get('/', (req, res) => res.send('MERN TODO API'));


async function start() {
try {
await mongoose.connect(process.env.MONGO_URI, {
useNewUrlParser: true,
useUnifiedTopology: true,
});
console.log('Connected to MongoDB');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (err) {
console.error('Failed to start server:', err);
process.exit(1);
}
}


start();