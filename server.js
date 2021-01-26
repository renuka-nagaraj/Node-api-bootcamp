const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env' });

let app = express();
let PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`app listening at ${process.env.NODE_ENV} mode and ${PORT}`);
});
