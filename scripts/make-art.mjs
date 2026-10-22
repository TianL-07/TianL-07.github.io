import fs from 'node:fs';
const paths=[];
for(let i=0;i<30;i++){
  const scale=1-i*.027;
  let d='';
  for(let j=0;j<=240;j++){
    const t=j/240*Math.PI*2;
    const r=1+.12*Math.cos(3*t+.6)+.055*Math.sin(5*t-1)+.025*Math.cos(7*t);
    const x=258+scale*202*r*Math.cos(t)+12*(1-scale)*Math.cos(t*2);
    const y=205+scale*159*r*Math.sin(t)+9*Math.sin(t*2)*scale;
    d+=`${j?'L':'M'}${x.toFixed(2)},${y.toFixed(2)} `;
  }
  paths.push(`<path d="${d}Z" opacity="${(.32+i*.015).toFixed(2)}"/>`);
}
fs.writeFileSync(new URL('../assets/contours.svg',import.meta.url),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 420"><defs><pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".6" fill="#234e41" opacity=".17"/></pattern></defs><rect x="5" y="5" width="510" height="405" fill="url(#grid)"/><g fill="none" stroke="#315640" stroke-width=".9">${paths.join('')}</g><path d="M77 331L155 277L211 298L276 201L346 166" fill="none" stroke="#9b754b" stroke-width="1" stroke-dasharray="3 5"/><circle cx="346" cy="166" r="6" fill="#ad7046" stroke="#f6f5ef" stroke-width="3"/><g stroke="#234e41" stroke-width=".7" opacity=".6"><path d="M28 35v18m-9-9h18M483 365v18m-9-9h18"/></g><text x="368" y="162" font-family="Arial,sans-serif" font-size="8" letter-spacing="1.5" fill="#52614f">YOU ARE HERE</text></svg>`);
