const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			minLength: 5
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		birthdate: {
			type: Date,
			required: true
		},
		phoneNumber: {
			type: Number,
			required: false,
			minLength: 10,
		},
		hours: {
			type: Number,
			required: true,
		},
		exp: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;