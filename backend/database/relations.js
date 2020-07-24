const sequelize = require("sequelize");
const aws_file = require("./models/aws_file");
const companies = require("./models/idialog_companies");
const html = require("./models/idialog_html");
const image = require("./models/idialog_image");
const pdf = require("./Models/idialog_pdf");
const video = require("./Models/idialog_video");
const product = require("./Models/idialog_product");
const reference = require("./Models/idialog_reference");
const section = require("./Models/idialog_section");
const presentation = require("./Models/idialog_presentation");
const presentation_email = require("./Models/idialog_presentation_email");
const presentation_slide = require("./Models/idialog_presentation_has_slide")
const presentation_pdf = require("./Models/idialog_presentation_pdf");
const slide = require("./Models/idialog_slide");
const slide_button = require("./Models/idialog_slide_button");
const slide_backup = require("./Models/idialog_slide_has_backup");
const slide_reference = require("./Models/idialog_slide_has_reference");
const slide_survey = require("./Models/idialog_slide_has_survey");
const slide_video = require("./Models/idialog_slide_has_video");
const users_products = require("./Models/idialog_users_has_products");
const user = require("./models/users");

user.belongsToMany(product, {through: users_products});
product.belongsToMany(user, {through: users_products});


