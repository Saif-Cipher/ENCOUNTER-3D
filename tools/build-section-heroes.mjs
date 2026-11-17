// Frame transparent character assets for the existing cinematic scene geometry.
// The original supplied JPEGs remain untouched; only the cutouts are displayed.
import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const mapping=JSON.parse(await readFile(path.join(root,'docs/hero-mapping.json'),'utf8'));
for(const hero of mapping){
 const data=(await readFile(path.join(root,hero.cutout))).toString('base64');
 const {width:sourceWidth,height:sourceHeight}=hero.cutoutSize;
 const {x,y,width,height}=hero.crop;
 const displayWidth=Math.round(width/height*900);
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${displayWidth}" height="900" viewBox="${x} ${y} ${width} ${height}"><defs><linearGradient id="feet" x2="0" y2="1"><stop offset=".94" stop-color="white"/><stop offset="1" stop-color="black"/></linearGradient><mask id="ground" maskUnits="userSpaceOnUse" x="${x}" y="${y}" width="${width}" height="${height}"><rect x="${x}" y="${y}" width="${width}" height="${height}" fill="url(#feet)"/></mask></defs><image href="data:image/png;base64,${data}" width="${sourceWidth}" height="${sourceHeight}" mask="url(#ground)"/></svg>`;
 await writeFile(path.join(root,hero.portrait),svg);
}
const contact=mapping.find(h=>h.section==='contact');
const portrait=(await readFile(path.join(root,contact.portrait))).toString('base64');
const closing=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><defs><radialGradient id="room"><stop stop-color="#54201d"/><stop offset="1" stop-color="#10080b"/></radialGradient><linearGradient id="veil"><stop stop-color="#10080b"/><stop offset=".5" stop-color="#10080b" stop-opacity=".94"/><stop offset="1" stop-color="#10080b" stop-opacity="0"/></linearGradient></defs><rect width="1600" height="900" fill="url(#room)"/><image href="data:image/svg+xml;base64,${portrait}" x="720" y="100" width="1010" height="800" preserveAspectRatio="xMidYMax meet"/><rect width="1600" height="900" fill="url(#veil)"/><text x="120" y="135" fill="#edb29d" font-size="16" font-family="Arial" letter-spacing="5">AI / AUTOMATION / WEB / VIDEO</text><g fill="#f3ddd0" font-size="94" font-family="Arial" font-weight="bold"><text x="120" y="330">LET'S BUILD</text><text x="120" y="455">SOMETHING</text><text x="120" y="580">USEFUL.</text></g><text x="125" y="760" fill="#e2a68e" font-size="26" font-family="Arial">pixelcraftbysaif@gmail.com</text><text x="125" y="810" fill="#bfa398" font-size="14" font-family="Arial" letter-spacing="4">SAIF HOSSAIN</text></svg>`;
await writeFile(path.join(root,'public/saif/final-frame.svg'),closing);
console.log('Built five transparent section heroes and a cutout-only closing composition.');
