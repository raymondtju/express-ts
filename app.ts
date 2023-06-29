import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import errorMiddleware from "./middleware/error.middleware";

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  morgan(
    `:remote-addr - :remote-user [:date[clf]] :response-time ms ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"`
  )
);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Handle Middleware
app.use(errorMiddleware);

// Database Connection
import mongoose from "mongoose";
import env from "./lib/utils";

let conn: Promise<typeof mongoose>;
async function clientConnect() {
  if (conn == null) {
    conn = mongoose
      .connect(env.mongoUri, {
        serverSelectionTimeoutMS: 5000,
      })
      .then(() => mongoose);

    console.log(`⚡️[database]: Database Connected`);
    return await conn;
  }
  console.log(`⚡️[database]: Using previous connection`);
  return conn;
}
clientConnect();

// Listen to port
const port = 8000;
app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
