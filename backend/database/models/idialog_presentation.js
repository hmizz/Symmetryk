/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('idialog_presentation', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true
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
		imported_file_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'aws_file',
				},
				key: 'id'
			}
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		index: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		type: {
			type: DataTypes.ENUM('default','custom'),
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
		sequelize,
		timestamps: false,
		tableName: 'idialog_presentation'
	});
};
