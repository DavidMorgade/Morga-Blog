const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3009;

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Webhook received:', req.body);

  // Ejecutar el script de reconstrucción
  exec('sh ./deploy-script.sh', (err, stdout, stderr) => {
    if (err) {
      console.error('Error executing deploy script:', err);
      return res.status(500).send('Server error');
    }
    console.log('Deploy script output:', stdout);
    res.status(200).send('Webhook processed');
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

