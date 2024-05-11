const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const cors = require('cors'); // Require the CORS library


app.use(cors());
const port = 3000;


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
