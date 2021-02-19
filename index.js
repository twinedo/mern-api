const express = require('express');

const app = express();

app.use(() => {
	console.log('server is running...');
	console.log('server is running 2...');
});
app.listen(4000);
