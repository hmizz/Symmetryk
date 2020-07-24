const { DataTypes } = require('sequelize');
const db = require('../db');

const slide_video = db.define('Slide_Video', {
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
		video_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'idialog_video',
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
		tableName: 'idialog_slide_has_video'
	});
module.exports = slide_video ;
