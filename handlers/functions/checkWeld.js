const axios = require("axios");
const { bot, pool, isDate } = require("../../connection");
require("dotenv").config();
const fs = require("fs");
const { error_text, undefined_check } = require("../../assets/text");

const check_photo = (chatId, photo) => {
  let date_now = isDate();

  const data = {
    url_photo: photo,
    date: date_now,
  };

  const params = new URLSearchParams(data);

  axios
    .post(process.env.API_URL, params.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      let text = res.data;
      // console.log(res.data);
      if (text) {
        bot.sendMessage(chatId, text);
      } else {
        bot.sendMessage(chatId, undefined_check);
      }
    })
    .catch((error) => {
      console.log(err);
      fs.appendFile("errors.txt", `${e}` + "\n", function (e) {});
      bot.sendMessage(chatId, error_text);
      return;
    });
};

exports.check_photo = check_photo;
