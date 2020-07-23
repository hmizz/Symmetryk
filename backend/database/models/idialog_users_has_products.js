const { DataTypes } = require('sequelize');
const db = require('../db');

module.exports = db.define('Users_Products', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true
		},
		product_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'idialog_product',
				},
				key: 'id'
			}
		},
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'users',
				},
				key: 'id'
			}
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		db,
		timestamps: false,
		tableName: 'idialog_users_has_products'
	});
