const https = require('https');
const fs = require('fs');
const path = require('path');

const imageUrl = 'https://raw.githubusercontent.com/codeium-ai/pharmacy-nextjs/main/public/images/logo.png';
const targetDir = path.join(__dirname, '..', 'public', 'images');
const targetFile = path.join(targetDir, 'logo.png');

// Create directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log('Downloading logo...');

https.get(imageUrl, (response) => {
  if (response.statusCode === 404) {
    console.log('Using fallback logo URL...');
    // Fallback to a different logo if the first one fails
    const fallbackUrl = 'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=360&q=80';
    https.get(fallbackUrl, (fallbackResponse) => {
      const fileStream = fs.createWriteStream(targetFile);
      fallbackResponse.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log('Logo downloaded successfully');
      });
    });
    return;
  }

  const fileStream = fs.createWriteStream(targetFile);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log('Logo downloaded successfully');
  });
}).on('error', (err) => {
  console.error('Error downloading logo:', err.message);
});
