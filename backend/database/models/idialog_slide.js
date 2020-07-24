const { DataTypes } = require('sequelize');
const db = require('../db');
const presentation = require('./idialog_presentation');
const presentation_slide = require('./idialog_presentation_has_slide');
const slide = db.define('Slide', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		product_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'idialog_product',
				},
				key: 'id'
			}
		},
		section_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'idialog_section',
				},
				key: 'id'
			}
		},
		image_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'idialog_image',
				},
				key: 'id'
			}
		},
		html_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'idialog_html',
				},
				key: 'id'
			}
		},
		slidable_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true
		},
		slidable_type: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		index: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		backup: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 0
		},
		required: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 0
		},
		emailable: {
			type: DataTypes.INTEGER(1),
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
		tableName: 'idialog_slide'
	});

module.exports = slide ;
