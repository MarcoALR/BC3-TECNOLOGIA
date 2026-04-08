import fs from "fs";
const a = fs.readFileSync("dist/assets/index-BhL5b0Ig.js", "utf8");
const b = fs.readFileSync("dist/assets/index-BE3b_Wyl.js", "utf8");
const re = /"([^"\\]|\\.){4,}"|'([^'\\]|\\.){4,}'/g;
function ext(s){
  const out = new Set();
  let m;
  while((m=re.exec(s))){
    const raw = m[0].slice(1,-1);
    if (/^[a-zA-Z0-9_\\-\\/.: ,()]+$/.test(raw) && /[a-zA-Z]/.test(raw)) out.add(raw);
  }
  return out;
}
const sa = ext(a), sb = ext(b);
const onlyA = [...sa].filter(x=>!sb.has(x)).sort();
const onlyB = [...sb].filter(x=>!sa.has(x)).sort();
console.log("ONLY_BhL5", onlyA.length);
console.log(onlyA.slice(0,120).join("\n"));
console.log("---");
console.log("ONLY_BE3", onlyB.length);
console.log(onlyB.slice(0,120).join("\n"));
