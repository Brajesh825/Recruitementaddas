const { isTokenValid } = require('../utils')

const authenticateUser = async(req, res, next) => {
    const token = req.cookies.token

    if (!token) {
        return res.redirect('/user/login')
    }
    try {
        const { name, userId, role } = isTokenValid({ token })
        req.user = { name, userId, role }
        next()
    } catch (error) {
        return res.redirect("user/login");
    }
}

const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.redirect('/user/login?msg="Access denied for current user"')
        }
        next();
    }
}

module.exports = {
    authenticateUser,
    authorizePermissions
}