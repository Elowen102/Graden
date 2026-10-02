const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Graden backend is running' });
});

app.listen(port, () => {
  console.log(`Graden backend listening on http://localhost:${port}`);
});
