import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const input = 'public/IP-Mono-black_2x.png';
const output = 'public/ip-logo.webp';

sharp(input)
    .webp({ quality: 90 })
    .toFile(output)
    .then(info => {
        console.log(`Converted ${input} to ${output}`);
        console.log(info);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
