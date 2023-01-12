const bcrypt = require('bcrypt')
const Users = require('../models/userModel')

const getUser = async(req,res) =>{
	try {
		const response = await Users.findall({
			attributes: ['userName', 'email', 'number', 'role', 'address']
		})
	}
}