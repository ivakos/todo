const express = require('express');
const mongoose = require('mongoose');
const Task = require('./schemas/task');
const app = express();
const bodyParser = require('body-parser');

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Allow", "GET, POST, PUT, DELETE");
    next();
});

const PORT = 3000;
const db = 'mongodb+srv://Ivan:APh3sl6ciL40CD0s@cluster0.genmdxn.mongodb.net/node-todo?retryWrites=true&w=majority';

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error));

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get('/tasks', (req, res) => {
    Task
        .find()
        .then((tasks) => res.send(tasks))
        .catch((error) => {
            console.log(error);
        })
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task
        .save()
        .then((result) => res.send(result))
        .catch((error) => {
            console.log(error);
            res.render(createPath('error'), {title: 'Error'});
        })
});

app.put('/tasks/:id', (req, res) => {
    const object = req.body;
    const {id} = req.params;
    Task
        .findByIdAndUpdate(id, object)
        .then((result) => res.send(result))
        .catch((error) => {
            console.log(error);
        })
});

app.delete('/tasks/:id', (req, res) => {
    Task
        .findByIdAndDelete(req.params.id)
        .then(() => res.sendStatus(200))
        .catch((error) => {
            console.log(error);
        })
});