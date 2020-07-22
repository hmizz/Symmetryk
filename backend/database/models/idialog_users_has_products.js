
module.exports = function(sequelize, DataTypes) {
	const users_has_products = sequelize.define('users_has_products', {
		id: {
			autoIncrement: true,
			type: DataTypes.INTEGER(10),
			allowNull: false,
			primaryKey: true
		},
		product_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'idialog_product',
				},
				key: 'id'
			}
		},
		user_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			references: {
				model: {
					tableName: 'users',
				},
				key: 'id'
			}
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		deleted_at: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		sequelize,
		timestamps: false,
		tableName: 'idialog_users_has_products'
	});
return users_has_products ;
};
