const express = require("express");
const app = express();
const port = 5001;

app.use("/static", express.static("public"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  
});
