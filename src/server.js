import express, { json } from "express";
import dotenv from "dotenv";
import transactionsRoute from "./routes/transactionsRoute.js";
import { initDB } from "./config/db.js";

const app = express();
dotenv.config();
const PORT_NUMBER = process.env.PORT_NUMBER || 5001;

// app.use(express.json())
// app.get("/", (req, res) => res.status(201).json("Burada"));

app.use(express.json());
app.use("/api/transactions", transactionsRoute);

initDB().then(() =>
  app.listen(PORT_NUMBER, () => {
    console.log("App listens Port: " + PORT_NUMBER);
  })
);
