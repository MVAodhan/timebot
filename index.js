require("dotenv").config();

const {
	Client,
	Events,
	GatewayIntentBits,
	WebhookClient,
} = require("discord.js");

const webhookClient = new WebhookClient({
	url: process.env.DISCORD_WEBHOOK_URL,
});

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

const sendWebhook = () => {
	webhookClient.send("<@354095834432012300>");
};

sendWebhook();
// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
