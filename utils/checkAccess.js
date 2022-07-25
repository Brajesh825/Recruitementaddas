const checkPermissions = (requestUser, resourceUserId) => {
    if (requestUser.role === 'admin') return
    if (requestUser.userId === resourceUserId.toString()) return
}

module.exports = checkPermissions