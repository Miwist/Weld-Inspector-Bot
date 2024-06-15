const { axios } = require("axios");
const { bot, pool, isDate } = require("../../connection");
require("dotenv").config();
const fs = require("fs");

const check_photo = (chatId, photo) => {
  let date_now = isDate();
  let data = {
    url_photo: photo,
    date: date_now,
  };

  axios
    .post(process.env.API_TOKEN, data)
    .then((res) => {
      console.log("Фото успешно передано на сервер!");
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      fs.appendFile("errors.txt", `${e}` + "\n", function (e) {});
      return bot.sendMessage(chatId, error_text);
    });
};

exports.check_photo = check_photo;
