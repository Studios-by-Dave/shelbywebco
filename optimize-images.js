import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs/promises';
import path from 'path';

const ASSETS_DIR = './assets';
const MAX_WIDTH = 2000;
const QUALITY = 80;

async function optimizeImages() {
  const images = await glob(`${ASSETS_DIR}/**/*.{jpg,jpeg,png,webp}`);
  
  console.log(`Found ${images.length} images to optimize.`);

  for (const imagePath of images) {
    const ext = path.extname(imagePath).toLowerCase();
    const stats = await fs.stat(imagePath);
    const originalSize = (stats.size / 1024 / 1024).toFixed(2);

    console.log(`Processing ${imagePath} (${originalSize} MB)...`);

    try {
      const image = sharp(imagePath);
      const metadata = await image.metadata();

      let pipeline = image;

      // Resize if too large
      if (metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH);
      }

      // Compress based on format
      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: QUALITY, progressive: true });
      } else if (ext === '.png') {
        pipeline = pipeline.png({ compressionLevel: 9, palette: true });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: QUALITY });
      }

      const buffer = await pipeline.toBuffer();
      
      // Save optimized image (overwriting original)
      await fs.writeFile(imagePath, buffer);

      const newStats = await fs.stat(imagePath);
      const newSize = (newStats.size / 1024 / 1024).toFixed(2);
      console.log(`  Done: ${originalSize} MB -> ${newSize} MB`);
    } catch (error) {
      console.error(`  Error processing ${imagePath}:`, error.message);
    }
  }

  console.log('Optimization complete!');
}

optimizeImages();
