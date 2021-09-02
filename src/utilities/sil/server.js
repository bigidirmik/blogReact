import React from 'react'
import express, { json, urlencoded } from "express";

export default function server() {

const app = express();

app.use(json({ limit: "50mb" }));
app.use(urlencoded({ limit: "50mb", extended: true }));

app.post("/api/upload", (req, res) => {
  try {
    const fileString = req.body.data;
    console.log(fileString);
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

    return (
        <div></div>
    )
}
