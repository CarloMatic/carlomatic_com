import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const filesToConvert = [
    'public/carlo-matic-ceo-interactive-pioneers-profile.jpg',
    'public/interactive-pioneers-logo-black.png',
    'public/images/nokia-3310-snake-game-retro.png',
    'public/IP-Mono-black_2x.png' // Converting this as well just in case
];

async function convert() {
    for (const file of filesToConvert) {
        const inputPath = path.resolve(process.cwd(), file);
        if (!fs.existsSync(inputPath)) {
            console.warn(`Skipping missing file: ${file}`);
            continue;
        }

        const dir = path.dirname(inputPath);
        const name = path.basename(inputPath, path.extname(inputPath));
        const outputPath = path.join(dir, `${name}.webp`);

        try {
            console.log(`Converting ${file} -> ${name}.webp...`);
            await sharp(inputPath)
                .webp({ quality: 85 })
                .toFile(outputPath);
            console.log('Done.');
        } catch (error) {
            console.error(`Failed to convert ${file}:`, error);
        }
    }
}

convert();
