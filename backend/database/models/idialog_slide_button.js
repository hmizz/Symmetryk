const { DataTypes } = require('sequelize');
const db = require('../db');

const slide_button = db.define('Slide_Button', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		slide_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'idialog_slide',
				},
				key: 'id'
			}
		},
		pos_x: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		pos_y: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		width: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		height: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		border: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: "transparent"
		},
		target_slide_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'idialog_slide',
				},
				key: 'id'
			}
		},
		active: {
			type: DataTypes.INTEGER(4),
			allowNull: false,
			defaultValue: 1
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
		tableName: 'idialog_slide_button'
	});
module.exports = slide_button ;
