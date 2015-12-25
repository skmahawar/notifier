var config = {
	connection: process.env.MONGO_CONNECTION,
	accessToken: '1234',

	logentries: {
		token: process.env.LOGENTRIES_TOKEN
	},

	hook: {
		url: process.env.HOOK_URL,
		token: process.env.HOOK_TOKEN
	},
	
    mailOptions: {
        welcome: {
            to: "example@gmail.com",
            from: "Suresh Mahawar <suresh.mahawar1988@gmail.com>",
            subject: "Hello, World!"
        }
    },

	transport: {
		mandrill: {
			token: process.env.MANDRILL_TOKEN
		},
		mailgun: {
            api_key: process.env.MAILGUN_API_KEY,
            domain: process.env.MAILGUN_DOMAIN
        },
		twilio : {
			accountSid: process.env.TWILIO_ACCOUNT_SID,
			authToken: process.env.TWILIO_ACCOUNT_TOKEN
		},
		gcm : {
			serverApiKey: process.env.GOOGLE_SERVER_API_KEY
		},
		apn : {
			cert: process.env.APPLE_CERT,
			key: process.env.APPLE_KEY
		}
	},

	jobs: {
		run: {
			resolve: 5,
			execute: 10
		},

		collection: 'notifierJobs'
	}
};

module.exports = config;