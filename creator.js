const fs = require('fs');

for (num = 1; num <= 3; num++) {
	// create a JSON object
	const metadata = {
		name: `Some NFT #${num}`,
		description: 'NFTNFT',
		image: `ipfs://qweqweqw/${num}.png`,
		attributes: []
	};

	// convert JSON object to string
	const data = JSON.stringify(metadata);

	// write JSON string to a file
	fs.writeFile(`./metadata/${num}.json`, data, (err) => {
		if (err) {
			throw err;
		}
		console.log('JSON datas are saved.');
	});
}
