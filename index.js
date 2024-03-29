const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	// Set header content type
	res.setHeader("Content-Type", "text/html");

	// Get file path
	let path = "./views/";
	switch (req.url) {
		case "/":
			path += "index.html";
			break;
		case "/about":
			path += "about.html";
			break;
		case "/contact-me":
			path += "contact-me.html";
			break;
		default:
			path += "404.html";
	}

	fs.readFile(path, (err, data) => {
		if (err) {
			console.error(err);
			res.end();
		}
		res.end(data);
	});
});

server.listen(3000, () => {
	console.log("Listening for requests on port 3000");
});
