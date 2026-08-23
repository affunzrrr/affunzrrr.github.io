import sharp from "sharp";

const source = "Afra.jpeg";
const output = "public/images";

await Promise.all([
  sharp(source).resize({ width: 640 }).avif({ quality: 64, effort: 6 }).toFile(`${output}/afra-portrait-640.avif`),
  sharp(source).resize({ width: 960 }).avif({ quality: 64, effort: 6 }).toFile(`${output}/afra-portrait-960.avif`),
  sharp(source).resize({ width: 640 }).webp({ quality: 78, effort: 6 }).toFile(`${output}/afra-portrait-640.webp`),
  sharp(source).resize({ width: 960 }).webp({ quality: 80, effort: 6 }).toFile(`${output}/afra-portrait-960.webp`),
  sharp(source).resize({ width: 960 }).jpeg({ quality: 82, progressive: true }).toFile(`${output}/afra-portrait-960.jpg`),
  sharp(source)
    .resize({ width: 1200, height: 630, fit: "cover", position: "attention" })
    .composite([
      {
        input: Buffer.from(`
          <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="510" height="630" fill="#111827" fill-opacity="0.94"/>
            <rect x="54" y="72" width="48" height="4" fill="#91b4ff"/>
            <text x="54" y="148" fill="#91b4ff" font-family="Arial" font-size="19" font-weight="700">BUSINESS · TECHNOLOGY · COMMUNICATION</text>
            <text x="54" y="255" fill="#ffffff" font-family="Georgia" font-size="64">Afra</text>
            <text x="54" y="325" fill="#ffffff" font-family="Georgia" font-size="64">Nazeer</text>
            <text x="54" y="388" fill="#c9cfda" font-family="Arial" font-size="23">IT for Business undergraduate</text>
            <circle cx="472" cy="562" r="12" fill="#1755d1"/>
          </svg>`),
        top: 0,
        left: 0,
      },
    ])
    .jpeg({ quality: 84, progressive: true })
    .toFile(`${output}/afra-og.jpg`),
]);

console.log("Responsive portrait and social preview images created.");
