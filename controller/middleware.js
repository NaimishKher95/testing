const jwt = require('jsonwebtoken');
const usersModel = require('./model/user')

const isAdminAuthenticated = (req, res, next) => {
    console.log(555);
    const sAuthToken = req.header('Authorization');
    const decoded = jwt.verify(sAuthToken,'123456')

        let query = decoded._id;
        console.log(query)
        usersModel.findById(query, { _id: true }, (error, doc) => {
            console.log(doc);
            if (error) return res.status(500).json(error);
            if (!doc) return res.status(401).json(messageService.USER_UNAUTHORISED);
            req._UserId = doc._id;
            next();
        });
}

module.exports = {
    isAdminAuthenticated
}