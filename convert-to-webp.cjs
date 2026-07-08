const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');
const dinosDir = path.join(publicDir, 'dinos');

// Specific root images to convert
const specificRootImages = [
  'habitat_desert.png',
  'habitat_jungle.png',
  'habitat_ocean.png',
  'habitat_volcano.png',
  'jurassic.png',
  'cretaceous.png',
  'triassic.png',
  'extinction.png',
  'cta_background.png'
];

async function convertImage(filePath) {
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    return;
  }
  
  const ext = path.extname(filePath);
  if (ext !== '.png') return;

  const newFilePath = filePath.replace(/\.png$/, '.webp');
  
  try {
    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(newFilePath);
    
    console.log(`Converted: ${path.basename(filePath)} -> ${path.basename(newFilePath)}`);
    
    // Delete original file
    fs.unlinkSync(filePath);
    console.log(`Deleted original: ${path.basename(filePath)}`);
  } catch (err) {
    console.error(`Error converting ${filePath}:`, err);
  }
}

async function convertDinosDir() {
  if (fs.existsSync(dinosDir)) {
    const files = fs.readdirSync(dinosDir);
    for (const file of files) {
      if (file.endsWith('.png')) {
        await convertImage(path.join(dinosDir, file));
      }
    }
  }
}

async function convertRootImages() {
  for (const file of specificRootImages) {
    await convertImage(path.join(publicDir, file));
  }
}

async function main() {
  console.log('Starting WebP conversion...');
  await convertDinosDir();
  await convertRootImages();
  console.log('WebP conversion complete!');
}

main();
