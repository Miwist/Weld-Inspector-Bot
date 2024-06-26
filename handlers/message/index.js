const fs = require("fs");
const { bot } = require("../../connection");
const {
  start_text,
  error_text,
  undefined_text,
  start_check,
} = require("../../assets/text");
const { send_photo } = require("../../buttons/buttons");
const { check_photo } = require("../functions/checkWeld");

let media_group_flag = [];

const botMessage = bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  let media_group_id = msg.media_group_id;

  try {
    if (text == "/start") {
      bot.sendMessage(chatId, start_text);
    } else if (msg.photo || msg.document) {
      let file_id = msg.photo ? msg.photo[msg.photo.length - 1].file_id : msg.document.file_id;
      const file_url = await bot.getFileLink(file_id);

      if (file_url) {
        if (media_group_flag.length) {
          let flag = false;
          media_group_flag.forEach((id) => {
            if (id == media_group_id) {
              flag = true;
            }
          });
          if (!flag) {
            bot.sendMessage(chatId, start_check);
          }
        } else {
          bot.sendMessage(chatId, start_check);
        }
        check_photo(chatId, file_url);
      }
    }  else {
      bot.sendMessage(chatId, undefined_text);
    }
    if (media_group_id) {
      media_group_flag.push(media_group_id);
    }
  } catch (e) {
    fs.appendFile("errors.txt", `${e}` + "\n", function (e) {});
    console.log(e);
    return bot.sendMessage(chatId, error_text);
  }
});

exports.botMessage = botMessage;
