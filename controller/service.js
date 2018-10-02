const Usermodel = require('./model//user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Registration = (req, res, next) => {
    console.log(123, req.body);
    const hash = bcrypt.hashSync(req.body.sPassword, bcrypt.genSaltSync(10));
    req.body.sPassword = hash;
    console.log(456);
    Usermodel.create(req.body, (Err, res) => {
        if (Err) console.log(Err);
        else console.log('success')
    });

}

const Login = (req, res, next) => {
    console.log(111)
    Usermodel.findOne({ sEmail: req.body.sEmail }, (err, res1) => {
    if(err) {
       console.log(err);
    } else {
        console.log('success', req.body.sPassword, res1)
        if (bcrypt.compareSync(req.body.sPassword, res1.sPassword)) {
            console.log(222)
            const authtoken = jwt.sign({_id: (res1._id)}, '123456')
            res1.sAuthToken = authtoken;
            res1.save((err, my) => {
                return res.status(200).json(authtoken);
            });

        } else {
            console.log(123)
        }
        }
    })
}

const profile = (req, res, next) => {
    console.log('scusss')
}

module.exports = {
    Registration,
    Login,
    profile
}