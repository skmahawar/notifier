var config = {
	connection: 'mongodb://localhost:27017/notifiertestdb',
	accessToken: '1234',

	logentries: {
		token: null
	},

	hook: {
		url: 'http://localhost:5000/api/notify/',
		token: 'fake-hook-token'
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
			token: 'fake-mandrill-api-token'
		},
		mailgun: {
            api_key: 'fake-mailgun-api-token',
            domain: 'example.com'
        },
		twilio : {
			accountSid: 'fake-twilio-account-sid',
			authToken: 'fake-twilio-auth-token'
		},
		gcm : {
			serverApiKey: 'fake-google-server-api-key'
		},
		apn : {
			cert: 'fake-cert-path',
			key: 'fake-key-path'
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