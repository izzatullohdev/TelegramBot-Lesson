require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const token = "7692526808:AAEXF3_pceGDw2wY1b26pXWicgUrUIISBII";
const bot = new TelegramBot(token, { polling: true });

// 1-qadam
// console.log(bot);
// bot.getMe().then((me) => {
//   console.log(me);
// });

// 2-qadam
bot.onText(/\/start/, (message) => {
  bot.sendMessage(
    message.chat.id,
    `Assalomu alaykum ${message.chat.first_name}`
  );
});
