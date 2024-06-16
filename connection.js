const moment = require("moment");
const TelegramApi = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.BOT_TOKEN;

const bot = new TelegramApi(token, { polling: true });

const isDate = () => {
  return moment().format("DD.MM.YYYY HH:mm");
};

exports.isDate = isDate;

exports.bot = bot;
