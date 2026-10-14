/* One-off image optimizer: recompresses large JPEGs/PNGs in assets/ in place.
 * JPEG: quality 78, mozjpeg, strip, max width 2400. PNG: lossless level 9 + strip.
 * Run: node scripts/optimize-images.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOTS = ['assets', 'public'];
const EXT = /\.(jpe?g|png)$/i;
const MIN_JPEG_KB = 400;
const MIN_PNG_KB = 300;
const MIN_ICON_KB = 150; // public favicons
const MAX_WIDTH = 2400;

async function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (EXT.test(entry.name)) yield p;
  }
}

let saved = 0;
let count = 0;

for (const root of ROOTS) {
  if (!fs.existsSync(root)) continue;
  for await (const file of walk(root)) {
    const kb = fs.statSync(file).size / 1024;
    const isPng = /\.png$/i.test(file);
    const inPublic = file.startsWith('public');
    const minKb = isPng ? (inPublic ? MIN_ICON_KB : MIN_PNG_KB) : MIN_JPEG_KB;
    if (kb < minKb) continue;

    const before = fs.statSync(file).size;
    let out;
    try {
      const img = sharp(file, { failOn: 'none' });
      const meta = await img.metadata();
      let pipeline = img;
      if (!isPng && meta.width && meta.width > MAX_WIDTH) {
        pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
      }
      out = isPng
        ? await pipeline.png({ compressionLevel: 9, effort: 10 }).toBuffer()
        : await pipeline.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
    } catch (err) {
      console.error(`skip ${file}: ${err.message}`);
      continue;
    }

    if (out.length < before * 0.95) {
      fs.writeFileSync(file, out);
      const after = out.length;
      saved += before - after;
      count++;
      console.log(`${file}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
    }
  }
}

console.log(`\n${count} files compressed, ${(saved / 1024 / 1024).toFixed(1)}MB saved`);
