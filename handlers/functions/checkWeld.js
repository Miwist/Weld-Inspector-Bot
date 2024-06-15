const axios = require("axios");
const { bot, pool, isDate } = require("../../connection");
require("dotenv").config();
const fs = require("fs");
const { error_text, undefined_check } = require("../../assets/text");
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
  let date_now = isDate();

  let image_array = get_image_array(photo).then((image_array) => {
    console.log(image_array);
  });

  const data = {
    url_photo: image_array,
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
