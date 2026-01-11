
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const files = [
    'Profilbild.jpeg',
    'carlo-linkedin.jpeg',
    'dienerdshow.jpg',
    'drehturm-belvedere.jpeg',
    'ipbackground.jpg'
];

async function convert() {
    console.log('Starting conversion...');
    for (const file of files) {
        const inputPath = path.join(publicDir, file);
        const name = path.parse(file).name;
        const outputPath = path.join(publicDir, `${name}.webp`);

        try {
            if (fs.existsSync(inputPath)) {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);
                console.log(`✅ Converted: ${file} -> ${name}.webp`);
            } else {
                console.warn(`⚠️ File not found: ${file}`);
            }
        } catch (error) {
            console.error(`❌ Error converting ${file}:`, error);
        }
    }
}

convert();
