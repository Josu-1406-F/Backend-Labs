const express = require('express');
const app = express();

app.use(express.json());

const USER = { username: "admin", password: "password123" };

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    return res.status(200).json({ success: true, message: "Login successful" });
  }

  res.status(401).json({ success: false, message: "Invalid username or password" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
