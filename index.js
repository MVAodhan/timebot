require("dotenv").config();

const {
	Client,
	Events,
	GatewayIntentBits,
	WebhookClient,
} = require("discord.js");
const CronJob = require("cron").CronJob;

const webhookClient = new WebhookClient({
	url: process.env.DISCORD_WEBHOOK_URL,
});

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// const sendWebhook = () => {
// 	webhookClient.send("Hi from the cron job");
// };
var job = new CronJob(
	"0 11 11 * * *",
	function () {
		webhookClient.send("It's 11:11 bozo, make a wish <@1032480393540153364> ");
	},
	null,
	true,
	"America/New_York"
);
job.start();

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
