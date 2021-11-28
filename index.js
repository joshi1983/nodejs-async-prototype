import { config } from "./config.js"

function simulatedConnectToDB(dbURI) {
	console.log('Simulating connection to database with dbURI "' + dbURI + '"');
	const delayMiliseconds = 1000;
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('Delay period of ' + delayMiliseconds + 'ms ended.  simulatedConnectToDB now complete.');
			resolve();
		}, delayMiliseconds);
	});
}

function setupAPI() {
	console.log('Setting up API');
}

(async () => {
	await simulatedConnectToDB(config.dbURI);
	setupAPI();
})();
