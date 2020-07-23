const { DataTypes } = require('sequelize');
const db = require('../db');

const presentation_pdf = db.define('presentation_Pdf', {
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
		pdf_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'aws_file',
				},
				key: 'id'
			}
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
		tableName: 'idialog_presentation_pdf'
	});
module.exports = presentation_pdf ;
