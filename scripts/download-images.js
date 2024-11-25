const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  // Product Images
  {
    name: 'products/pain-relief.jpg',
    url: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800',
  },
  {
    name: 'products/vitamin-c.jpg',
    url: 'https://images.unsplash.com/photo-1616671276441-2f2c277b8bf6?w=800',
  },
  {
    name: 'products/first-aid.jpg',
    url: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800',
  },
  {
    name: 'products/multivitamin.jpg',
    url: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=800',
  },
  {
    name: 'products/bp-monitor.jpg',
    url: 'https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=800',
  },
  // Hero Image
  {
    name: 'hero/main-hero.jpg',
    url: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1600',
  },
  // Category Images
  {
    name: 'categories/prescription.jpg',
    url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800',
  },
  {
    name: 'categories/vitamins.jpg',
    url: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=800',
  },
  {
    name: 'categories/personal-care.jpg',
    url: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=800',
  },
  {
    name: 'categories/devices.jpg',
    url: 'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?w=800',
  },
];

const downloadImage = (url, filename) => {
  const targetDir = path.join(__dirname, '../public/images', path.dirname(filename));
  const targetPath = path.join(__dirname, '../public/images', filename);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  https.get(url, (response) => {
    const fileStream = fs.createWriteStream(targetPath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded: ${filename}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${filename}:`, err.message);
  });
};

console.log('Downloading images...');
images.forEach(img => downloadImage(img.url, img.name));
