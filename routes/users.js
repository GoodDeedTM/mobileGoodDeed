const router = require('express').Router();
let User = require('../models/user.model');

// get all users
router.route('/').get((req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json('Error: ' + err));
});

// add new user
router.route('/add').post((req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const birthdate = Date.parse(req.body.birthdate);
	const phoneNumber = Number(req.body.phoneNumber);
	const hours = Number(req.body.hours);
	const exp = Number(req.body.exp);

	const newUser = new User({
		username,
		password,
		firstName,
		lastName,
		birthdate,
		phoneNumber,
		hours,
		exp,
	});

	newUser.save()
		.then(() => res.json('User added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

// update existing user
router.route('/update/:id').post((req, res) =>{
	User.findById(req.params.id)
		.then(users => {
			users.username = req.body.username;
			users.password = req.body.password;
			users.firstName = req.body.firstName;
			users.lastName = req.body.lastName;
			users.birthdate = Date.parse(req.body.birthdate);
			users.phoneNumber = Number(req.body.phoneNumber);
			users.hours = Number(req.body.hours);
			users.exp = Number(req.body.exp);

			users.save()
				.then(() => res.json('User updated!'))
				.catch(err => res.status(400).json('Error: ' + err));
		})
		.catch(err => res.status(400).json('Error: ' + err));
});

// delete user

module.exports = router;