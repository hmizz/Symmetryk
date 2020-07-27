const { DataTypes } = require('sequelize');
const db = require('../db');
const product = require("./idialog_product");
const users_products = require("./idialog_users_has_products");

const user = db.define('User', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		last_login: {
			type: DataTypes.DATE,
			allowNull: true
		},
		first_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		last_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		access_level: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 0
		},
		company_id: {
			type: DataTypes.INTEGER(10),
			allowNull: false,
			references: {
				model: {
					tableName: 'idialog_companies',
				},
				key: 'id'
			}
		},
		timezone: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		db,
		timestamps: false,
		tableName: 'users'
	});
	
	user.belongsToMany(product, { through: users_products });
	product.belongsToMany(user, { through: users_products });
module.exports = user ;