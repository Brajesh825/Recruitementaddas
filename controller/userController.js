const User = require("../models/userModel")

const { attachCookiesToResponse, createTokenUser } = require("../utils");

class UserController {
    constructor() {}

    loginForm = async(req, res) => {
        res.render("login");
    };

    registerForm = async(req, res) => {
        res.render("register");
    };

    register = async(req, res) => {
        try {
            const { name, email, password } = req.body;
            const user = await User.create({ name, email, password });
            const tokenUser = createTokenUser(user);
            attachCookiesToResponse({ res, user: tokenUser });
            res.redirect("/course");
        } catch (error) {
            console.log(error.message);
            res.redirect("/user/register/msg=" + error.message);
        }
    };

    login = async(req, res) => {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error("Invalid Credentials");
            }
            const isPasswordCorrect = await user.comparePassword(
                password
            );
            if (!isPasswordCorrect) {
                return res.redirect(
                    '/user/login?msg="invalid user and password "'
                );
            }
            const tokenUser = createTokenUser(user);
            attachCookiesToResponse({ res, user: tokenUser });
            res.redirect("/course");

        } catch (error) {
            console.log(error);
            res.redirect('/user/login/msg=' + error.message)
        }
    };
}

module.exports = UserController