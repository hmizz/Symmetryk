const Sequelize = require('sequelize');
//const User = require("./Models/users");

module.exports = new Sequelize('Dialog', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});


// db.aws_file = require("./Models/aws_file")(db, Sequelize);

// db.companies = require("./Models/idialog_companies")(db, Sequelize);
// db.users = User ;

// db.html = require("./Models/idialog_html")(db, Sequelize);
// db.image = require("./Models/idialog_image")(db, Sequelize);
// db.pdf = require("./Models/idialog_pdf")(db, Sequelize);
// db.video = require("./Models/idialog_video")(db, Sequelize);
// db.product = require("./Models/idialog_product")(db, Sequelize);
// db.reference = require("./Models/idialog_reference")(db, Sequelize);
// db.section = require("./Models/idialog_section")(db, Sequelize);

// db.presentation = require("./Models/idialog_presentation")(db, Sequelize);
// db.presentation_email = require("./Models/idialog_presentation_email")(db, Sequelize);
// db.presentation_has_slide = require("./Models/idialog_presentation_has_slide")(db, Sequelize);
// db.presentation_pdf = require("./Models/idialog_presentation_pdf")(db, Sequelize);

// db.slide = require("./Models/idialog_slide")(db, Sequelize);
// db.slide_button = require("./Models/idialog_slide_button")(db, Sequelize);
// db.slide_has_backup = require("./Models/idialog_slide_has_backup")(db, Sequelize);
// db.slide_has_reference = require("./Models/idialog_slide_has_reference")(db, Sequelize);
// db.slide_has_survey = require("./Models/idialog_slide_has_survey")(db, Sequelize);
// db.slide_has_video = require("./Models/idialog_slide_has_video")(db, Sequelize);

// db.users_has_products = require("./Models/idialog_users_has_products")(db, Sequelize);

// db.users.belongsToMany(db.product, {through: 'users_has_products'});