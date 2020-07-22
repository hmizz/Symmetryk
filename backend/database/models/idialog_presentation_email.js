/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('idialog_presentation_email', {
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
		sequelize,
		timestamps: false,
		tableName: 'idialog_presentation_email'
	});
};
