const fs = require('fs');
const bcrypt = require('bcrypt');
const responseSender = require('../../helpers/response-sender');
const saltRounds = 10;

const registerHandlerPost = async (req, res) => {
    const userToSave = req.body;

    if (
        !userToSave.firstName
        || !userToSave.lastName
        || !userToSave.email
        || !userToSave.password
        || Object.keys(userToSave).length !== 4
    ) {
        return responseSender(res, 422, 'You\'ve missed something important...');
    }

    const rawData = fs.readFileSync('./BACKEND/DB/users.json');
    const users = JSON.parse(rawData);
    const isUserExist = users.some(user => user.email === userToSave.email);

    if (isUserExist) {
        return responseSender(res, 409, 'This email is already taken!');
    }

    userToSave.password = bcrypt.hashSync(userToSave.password, saltRounds);
    userToSave.createdEvents = [];
    userToSave.eventsToVisit = [];
    users.push(userToSave)

    try {
        fs.writeFileSync('./BACKEND/DB/users.json', JSON.stringify(users));
        responseSender(res, 200, 'Registration succeeded!');

    } catch (err) {
        responseSender(res, 500, err.message);
    }
};

module.exports = registerHandlerPost;