module.exports = {
  send_photo: {
    reply_markup: JSON.stringify({
      keyboard: [
        [
          {
            text: "Загрузить фото",
            callback_data: "send_photo"
          },
        ],
      ],
    }),
  },
};
