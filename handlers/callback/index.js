const { bot } = require("../../connection");
const fs = require("fs");

const botCallback = bot.on("callback_query", async (msg, match) => {
  const data = msg.data;
  const chatId = msg.message.chat.id;

  try {
    if (data == "send_photo") {
    }
  } catch (e) {
    fs.appendFile("errors.txt", `${e}` + "\n", function (e) {});
    console.log(e);
    return bot.sendMessage(chatId, "Произошла какая-то ошибка");
  }
});
