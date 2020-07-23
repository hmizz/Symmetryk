const { sequelize, DataTypes } = require('sequelize');
const db = require('../db');

const company = db.define('Company', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		country: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		db,
		timestamps: false,
		tableName: 'idialog_companies'
	});
module.exports = company ;