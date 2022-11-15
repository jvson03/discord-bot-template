const { Events, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		// We set the bot's activity & status.
		client.user.setStatus('idle');
		client.user.setActivity('The server is currently offline.', { type: ActivityType.Playing });
	},
};
