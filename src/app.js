import express from "express";

const app = express();

app.use("/test", (req, res) => {
  res.status(200).send({ message: "Operating" });
});

export default app;
