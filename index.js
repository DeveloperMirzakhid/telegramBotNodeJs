const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1662416532:AAF5QeEx4esalXQgaoKibKtOpKpQsUKDB0k'

console.log('Bot has been started')

const bot = new TelegramBot(TOKEN, {
	polling: {
		interval: 300, 
		autoStart: true,
		params: {
			timeout: 10
		}
	}
})

bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, 'I am alive');
})