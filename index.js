const {bot} = require('./connection');
const { botMessage } = require("./handlers/message");
const { botCallback } = require("./handlers/callback");

const start = async () => {

    bot.setMyCommands([
        { command: "/start", description: "Приветствие" },
        // { command: "/questions", description: "Вопросы" },
      ]);
}

start()