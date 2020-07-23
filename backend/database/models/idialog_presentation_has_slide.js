const { DataTypes } = require('sequelize');
const db = require('../db');

const presentation_slide = db.define('Presentation_Slide', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		presentation_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'idialog_presentation',
				},
				key: 'id'
			}
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
		index: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		timezone: {
			type: DataTypes.STRING(255),
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
		tableName: 'idialog_presentation_has_slide'
	});


module.exports = presentation_slide ;
