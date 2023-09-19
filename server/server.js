import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT;

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log(`Database Connected`);
  })
  .catch((e) => {
    console.log(e);
  });
app.listen(PORT, () => {
  console.log(`Server is running on port 4000`);
});
