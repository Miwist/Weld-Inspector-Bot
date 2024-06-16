const axios = require("axios");
const { bot } = require("../../connection");
require("dotenv").config();
const fs = require("fs");
const { error_text } = require("../../assets/text");
const Jimp = require("jimp");

async function get_image_array(image_path) {
  try {
    const image = await Jimp.read(image_path);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    const data = image.bitmap.data;

    const image_array = new Array(height);
    for (let y = 0; y < height; y++) {
      image_array[y] = new Array(width);

      for (let x = 0; x < width; x++) {
        const index = (y * width + x) * 4;

        image_array[y][x] = [
          data[index],
          data[index + 1],
          data[index + 2], 
        ];
      }
    }

    return image_array;
  } catch (error) {
    console.error("Ошибка при обработке изображения:", error);
    return null;
  }
}

const check_photo = (chatId, photo) => {

  const data = {
    input: photo,
  };

  const params = new URLSearchParams(data);
  const headers = {
    'x-node-id': 'bt1qmglkd3pm28062t3u',
    'x-folder-id': 'b1g9h3dhkk2scq0lrtmf',
    'Authorization': process.env.AUTH_KEY,
  };
  
  axios
    .post(process.env.API_URL, params.toString(), {
     headers
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      bot.sendMessage(chatId, error_text);
      return;
    });
};

exports.check_photo = check_photo;
