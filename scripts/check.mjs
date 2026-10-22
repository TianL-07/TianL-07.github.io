import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const pages=JSON.parse(fs.readFileSync(path.join(root,'scripts/generated-pages.json'),'utf8'));
let refs=0;
for(const url of pages){
  const file=path.join(root,url.slice(1),url.endsWith('.html')?'':'index.html');
  const html=fs.readFileSync(file,'utf8');
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,`${url}: must have exactly one h1`);
  assert(html.includes('id="main"'),`${url}: missing main landmark`);
  assert(html.includes('<meta name="description"'),`${url}: missing description`);
  for(const [,ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    if(!ref.startsWith('/')||ref.startsWith('//')) continue;
    const pathname=ref.split(/[?#]/)[0];
    const target=path.join(root,pathname.slice(1),pathname.endsWith('/')?'index.html':'');
    assert(fs.existsSync(target),`${url}: broken local reference ${ref}`); refs++;
  }
  assert(!html.includes('Your title'),`${url}: template leaked into published page`);
}
assert(fs.existsSync(path.join(root,'.nojekyll')),'Missing static Pages marker');
assert.equal(pages.length,new Set(pages).size,'Duplicate route');
console.log(`Verified ${pages.length} pages and ${refs} local links/assets; one h1 per page; no template leak.`);
