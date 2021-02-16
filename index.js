const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '1662416532:AAF5QeEx4esalXQgaoKibKtOpKpQsUKDB0k'
const debug = require('./helpers')
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

const chatId = msg.chat.id

	if (msg.text === 'Close'){

		bot.sendMessage(chatId, 'Close keyboard', {
			reply_markup: {
				remove_keyboard: true
			}
		})

	} else if (msg.text === 'Reply'){

		bot.sendMessage(chatId, 'Close keyboard', {
			reply_markup: {
				force_reply: true
			}
		})
		
	}else {



	bot.sendMessage(chatId, 'Klaviatura', {
		reply_markup: {
			keyboard: [
			[{
				text: 'Send Location',
				request_location: true
			}],
			['Reply','Close'], 
			[{
				text:'Send Contact',
				request_contact:true
			}]
			]
		}
	})
}
})