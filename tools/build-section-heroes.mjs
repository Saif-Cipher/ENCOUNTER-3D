// Browser presentation assets: retain the original JPEGs and soften scene edges.
import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const mapping=JSON.parse(await readFile(path.join(root,'docs/hero-mapping.json'),'utf8'));
for(const hero of mapping){
 const data=(await readFile(path.join(root,hero.image))).toString('base64');
 const width=['tools','process'].includes(hero.section)?900:600;
 const x=width/2-1612.5*hero.focal;
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="900" viewBox="0 0 ${width} 900"><defs><linearGradient id="h"><stop stop-color="black"/><stop offset=".14" stop-color="white"/><stop offset=".86" stop-color="white"/><stop offset="1" stop-color="black"/></linearGradient><linearGradient id="v" x2="0" y2="1"><stop stop-color="black"/><stop offset=".08" stop-color="white"/><stop offset=".84" stop-color="white"/><stop offset="1" stop-color="black"/></linearGradient><mask id="hm"><rect width="${width}" height="900" fill="url(#h)"/></mask><mask id="vm"><rect width="${width}" height="900" fill="url(#v)"/></mask></defs><g mask="url(#hm)"><g mask="url(#vm)"><image href="data:image/jpeg;base64,${data}" x="${x}" width="1612.5" height="900"/></g></g></svg>`;
 await writeFile(path.join(root,hero.portrait),svg);
}
const contact=mapping.find(h=>h.section==='contact');
const contactData=(await readFile(path.join(root,contact.image))).toString('base64');
const closing=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900"><defs><linearGradient id="veil"><stop stop-color="#10080b"/><stop offset=".52" stop-color="#10080b" stop-opacity=".95"/><stop offset="1" stop-color="#10080b" stop-opacity=".12"/></linearGradient></defs><image href="data:image/jpeg;base64,${contactData}" width="1600" height="900" preserveAspectRatio="xMidYMid slice"/><rect width="1600" height="900" fill="url(#veil)"/><text x="120" y="135" fill="#edb29d" font-size="16" font-family="Arial" letter-spacing="5">AI / AUTOMATION / WEB / VIDEO</text><g fill="#f3ddd0" font-size="94" font-family="Arial" font-weight="bold"><text x="120" y="330">LET'S BUILD</text><text x="120" y="455">SOMETHING</text><text x="120" y="580">USEFUL.</text></g><text x="125" y="760" fill="#e2a68e" font-size="26" font-family="Arial">pixelcraftbysaif@gmail.com</text><text x="125" y="810" fill="#bfa398" font-size="14" font-family="Arial" letter-spacing="4">SAIF HOSSAIN</text></svg>`;
await writeFile(path.join(root,'public/saif/final-frame.svg'),closing);
console.log('Built five section hero presentations and the contact closing scene.');
