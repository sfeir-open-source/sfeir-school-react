const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.SERVER_PORT || 1337;
const host = "http://localhost";

const data = require("./data.json");

app.use(cors());

app.get("/", (_, res) => {
  res.send(
    data.map((image) => ({
      id: image.id,
      description: image.description,
      thumbnailUrl: `${image.url}?w=256`,
      details: `${host}:${port}/${image.id}`,
    }))
  );
});

app.get("/:id", (req, res) => {
  const id = req.params.id;

  const image = data.find((image) => image.id === id);
  if (!image) {
    res.status(404).send();
    return;
  }

  const { url, ...info } = image;
  res.send({
    ...info,
    imageUrl: `${url}?w=900`,
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
