const { presend_text } = require("../../assets/text");
const { bot } = require("../../connection");
const fs = require("fs");

const botCallback = bot.on("callback_query", async (msg, match) => {
  const data = msg.data;
  const chatId = msg.message.chat.id;
  const msgId = msg.message.message_id;

  try {
    // ## В случае чего - можно настроить на кнопки
    if (data == "send_photo") {
      bot.sendMessage(chatId, presend_text);
    }
  } catch (e) {
    fs.appendFile("errors.txt", `${e}` + "\n", function (e) {});
    console.log(e);
    return bot.sendMessage(chatId, "Произошла какая-то ошибка");
  }
});
