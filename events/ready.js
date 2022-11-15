const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		// We set the bot's activity & status.
		// Set the client user's presence
		client.user.setPresence({ activities: [{ name: 'Redwood V' }], status: 'idle' });
	},
};
