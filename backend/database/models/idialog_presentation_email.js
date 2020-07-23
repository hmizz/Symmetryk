const { DataTypes } = require('sequelize');
const db = require('../db');
const presentation_slide = require('./idialog_presentation_has_slide');

const presentation_email = db.define('Presentation_Email', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		presentation_pdf_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'idialog_presentation_pdf',
				},
				key: 'id'
			}
		},
		rep_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'delegate',
				},
				key: 'id'
			}
		},
		device_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'delegate_keys',
				},
				key: 'id'
			}
		},
		key: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		emails_to: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		emails_cc: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		subject: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: false
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
		tableName: 'idialog_presentation_email'
	});
module.exports = presentation_email ;
