import express from "express";
import diaryRouter from "./routes/diaries";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // convierte el req.body a json

// Routes
app.get("/ping", (_req, res) => {
  console.log("someone pinged here!!!!!!");
  res.send("pong");
});

app.use("/api/diaries", diaryRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
