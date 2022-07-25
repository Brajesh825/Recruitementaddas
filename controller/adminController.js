class AdminController {
    constructor() {}

    home = (req, res) => {

        res.render('admin-panel')
    }
}

module.exports = AdminController