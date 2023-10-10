const User = require('../models/userModel');
exports.getUsers = (req, res) => {
    User.findAll().then(users => { res.render('index', { users })})
        .catch(err => console.log(err));
};
exports.addUser = (req, res) => {
    const { username, email, phonenumber } = req.body;
    User.create({ username, email, phonenumber }).then(() => { res.redirect('/')})
        .catch(err => console.log(err));
};
exports.editUser = (req, res) => {
    const userId = req.params.id;
    const { username, email, phonenumber } = req.body;
    User.findByPk(userId).then(user => {
            user.username = username;
            user.email = email;
            user.phonenumber = phonenumber;
            return user.save()})
        .then(() => { res.redirect('/')})
        .catch(err => console.log(err));
};
exports.getEditUser = (req, res) => {
    const userId = req.params.id;
    User.findByPk(userId).then(user => { res.render('edit', { user })})
        .catch(err => console.log(err));
};
exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.destroy({ where: { id: userId }}).then(() => { res.redirect('/') })
    .catch(err => console.log(err));
};
