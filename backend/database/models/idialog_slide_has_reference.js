/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('idialog_slide_has_reference', {
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
		reference_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: {
					tableName: 'idialog_reference',
				},
				key: 'id'
			}
		},
		index: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		pdf: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: 1
		},
		legend: {
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
		tableName: 'idialog_slide_has_reference'
	});
};
