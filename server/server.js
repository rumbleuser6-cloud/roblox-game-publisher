
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Roblox Game Publisher",
    status: "Backend is running"
  });
});

app.post("/api/check-game", (req, res) => {
  const { gameId } = req.body;

  if (!gameId || !/^[0-9]+$/.test(String(gameId))) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid numeric Game ID."
    });
  }

  res.json({
    success: true,
    gameId: String(gameId),
    message: "Game ID format accepted.",
    publishingEnabled: false,
    note: "Roblox visibility controls are not connected."
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
