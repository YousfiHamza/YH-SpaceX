const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema.js");
const cors = require("cors");

const path = require("path");

const app = express();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 4000;

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log("Server Listening on Port : ", PORT);
});
