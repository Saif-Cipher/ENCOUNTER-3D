// Render full, uncropped thumbnails onto the animated gallery's angled faces.
// Original JPEGs are also used directly by the project-detail dialog.
import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {projects} from '../src/saif-data.js';
import {CARDS} from '../src/scene4/layout4.js';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
for(const card of CARDS){
 const project=projects.find(p=>p.id===card.id);
 if(!project?.thumbnail)throw new Error('Missing thumbnail for '+card.id);
 const data=(await readFile(path.join(root,project.thumbnail))).toString('base64');
 const [x,,w,h]=card.box;
 const left=x+w/2<600,right=x+w/2>1060;
 const p0=left?[8,8]:right?[8,h*.22]:[8,8];
 const p1=left?[w-8,h*.22]:right?[w-8,8]:[w-8,8];
 const p3=left?[8,h*.78]:right?[8,h-8]:[8,h-8];
 const p2=[p1[0]+p3[0]-p0[0],p1[1]+p3[1]-p0[1]];
 const matrix=[(p1[0]-p0[0])/1376,(p1[1]-p0[1])/1376,(p3[0]-p0[0])/768,(p3[1]-p0[1])/768,p0[0],p0[1]].join(' ');
 const polygon=[p0,p1,p2,p3].map(p=>p.join(',')).join(' ');
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><image href="data:image/jpeg;base64,${data}" width="1376" height="768" transform="matrix(${matrix})"/><polygon points="${polygon}" fill="none" stroke="#b9c5cc" stroke-opacity=".55" stroke-width="1.5"/></svg>`;
 await writeFile(path.join(root,'public/saif/cards',card.id+'.svg'),svg);
}
console.log('Updated '+CARDS.length+' gallery thumbnails.');
