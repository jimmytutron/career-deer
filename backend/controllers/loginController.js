var db = require('../models');

module.exports = {
    signUp: async (req, res) => {
        try {
            res.json(await db.User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
                .catch((err) => {
                    res.status(400).json(err);
                })
            )
        } catch (err) {
            // console.log(err);
            res.status(422).json(err);
        }
    },

    loggingIn: (req, res) => {
        try {
            // TODO: update json to logged in route.
            res.json('/loggedinpage')
        } catch (err) {
            res.status(422).json(err);
        }
    },

    login: (req, res) => {
        try {
            if (req.user) {
                // Sending user to the logged in page, and stating req.user is true.
                // TODO: update json to logged in route.
                res.render('loggedinpage', { loggedIn: !(!req.user) });
            } else {
                // Sending user to login page with logged in being false.
                res.render('login', { loggedIn: !(!req.user) });
            }
        } catch (err) {
            res.status(422).json(err);
        }
    },

    logout: (req, res) => {
        try {
            if(req.user) {
                req.session.destroy( err => {
                    res.clearCookie('connect.sid')
                    req.logout();
                })
            }
        } catch (err) {
            res.status(422).json(err);
        }
    }


}