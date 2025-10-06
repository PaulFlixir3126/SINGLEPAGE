// ✅ Simple Express server for Angular build

const express = require('express');
const path = require('path');
const app = express();

// Path to Angular build folder
const distFolder = path.join(__dirname, 'dist', 'project-showcase');

// Serve static files
app.use(express.static(distFolder));

// All other routes should redirect to index.html (for Angular routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(distFolder, 'index.html'));
});

// Define the port (default: 8080)
const PORT = process.env.PORT || 30300;

// Start server
app.listen(PORT, () => {
  console.log(`✅ Angular app is running on: ${PORT}`); //wee
});



