const express = require("express");
const routes = require("./routes/routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// middleware to parse incoming JSON requests
app.use(express.json());

app.use("/yak-shop", routes);

// error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
