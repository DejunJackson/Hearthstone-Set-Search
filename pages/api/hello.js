// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
const http = require("https");

const options = {
	"method": "GET",
	"hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
	"port": null,
	"path": "/cards/sets/naxxramas",
	"headers": {
		"x-rapidapi-key": "62818c2f03msh35682cd42870264p1b0e83jsn2532aa4fd8ea",
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();