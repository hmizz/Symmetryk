const awsFile = require("../database/models/aws_file");

module.exports.getThumbsURL = async function (data) {
  if (data == []) return;
  for (let object of data) {
    if (object == null) continue;
    await awsFile.findByPk(object.thumb_id).then((url) => {
      object.thumbURL = url.cdnURL;
    })
    .catch((err) => {
        console.log(err);
        return ;
    });
  }
};
