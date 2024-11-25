const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrl = 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=1200&auto=format&fit=crop';
const targetDir = path.join(__dirname, '..', 'public', 'images');
const targetFile = path.join(targetDir, 'hero-pharmacy.jpg');

// Create directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Downloading hero image...');

https.get(imageUrl, (response) => {
  const fileStream = fs.createWriteStream(targetFile);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Hero image downloaded successfully');
  });
}).on('error', (err) => {
  console.error('Error downloading hero image:', err.message);
});
