import dotEnv from "dotenv";

dotEnv.config();
const varEnv = process.env;

const env = {
  port: varEnv.PORT || "8888",
  mongoUri: varEnv.MONGO_URI || "mongodb://127.0.0.1:27017/test",
};

export default env;
