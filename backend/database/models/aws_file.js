const { DataTypes } = require('sequelize');
const db = require('../db');

const aws_file = db.define('Aws_File', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'users',
				},
				key: 'id'
			}
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		bucket: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		region: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		cdnURL: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		size: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		size_thumb: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: 0
		},
		size_preview: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			defaultValue: 0
		},
		mime_type: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		extension: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		width: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		height: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		duration: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		viewed: {
			type: DataTypes.INTEGER(11),
			allowNull: true
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
		tableName: 'aws_file'
	});
module.exports = aws_file ;
