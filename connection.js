const moment = require("moment");
const TelegramApi = require("node-telegram-bot-api");
require("dotenv").config();
const { Pool } = require("pg"); // подключение к бд

const token = process.env.BOT_TOKEN;

const bot = new TelegramApi(token, { polling: true });

// ## Подключение к БД ##

// const pool = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     port: 5432,
//   });

const isDate = () => {
  return moment().format("DD.MM.YYYY HH:mm");
};

exports.isDate = isDate;

exports.bot = bot;
// exports.pool = pool;
