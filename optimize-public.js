import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = './public';
const MAX_WIDTH = 2000;
const QUALITY = 85;

async function optimizePublicImages() {
  const images = ['og-image.jpg', 'favicon.jpg', 'satisfaction_badge.jpg'];
  
  console.log(`Optimizing ${images.length} public images...`);

  for (const imageName of images) {
    const imagePath = path.join(PUBLIC_DIR, imageName);
    
    try {
      const stats = await fs.stat(imagePath);
      const originalSize = (stats.size / 1024).toFixed(2);
      
      console.log(`Processing ${imageName} (${originalSize} KB)...`);

      const image = sharp(imagePath);
      const metadata = await image.metadata();

      let pipeline = image;

      // Resize if too large
      if (metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH);
      }

      // Compress JPEG
      pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true });

      const buffer = await pipeline.toBuffer();
      
      // Save optimized image
      await fs.writeFile(imagePath, buffer);

      const newStats = await fs.stat(imagePath);
      const newSize = (newStats.size / 1024).toFixed(2);
      console.log(`  Done: ${originalSize} KB -> ${newSize} KB`);
    } catch (error) {
      console.error(`  Error processing ${imageName}:`, error.message);
    }
  }

  console.log('Public image optimization complete!');
}

optimizePublicImages();
