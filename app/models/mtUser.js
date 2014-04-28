var linz = require('linz'),
	mongoose = require('mongoose');

var mtUserSchema = new mongoose.Schema({
	name:  String,
	email: String,
	username: String,
	password: String,
	bAdmin: {
		type: Boolean,
		default: false
	}
});

// add the formtools plugin
mtUserSchema.plugin(linz.formtools.plugin, {
	columns: {
		name: 'Name',
		email: 'Email',
		bAdmin: 'Is Admin'
	},
	usePublishingDate: false,
	usePublishingStatus: false
});

mtUserSchema.virtual('hasAdminAccess').get(function () {
	return this.bAdmin === true;
});

var mtUser = module.exports = mongoose.model('mtUser', mtUserSchema);

mtUser.label = 'Users';
mtUser.singular = 'User';
