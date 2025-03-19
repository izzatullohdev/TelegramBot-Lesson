require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "iltimos locationingizni yuboring", {
    reply_markup: {
      keyboard: [[{ text: "location", request_location: true }]],
      resize_keyboard: true,
      one_time_keyboard: true,
    },
  });
});
bot.on("location", (msg) => {
  const { latitude, longitude } = msg.location;
  bot.sendMessage(msg.chat.id, `latitude: ${latitude}, longitude: ${longitude}`);
});
