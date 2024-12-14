function toPtText(t){
        
// Regex to match each <span> with color and letter
let regex = "<span.*?style=[\"']color:\\s*rgb\\((\\d+),(\\d+),(\\d+)\\)[\"']>(.*?)<\\/span>";

let rg=new RegExp(regex,"g");

rg.lastIndex=0;

let res = [];
let match;

// Use a loop to find all matches
//console.log("from worker:");
while ((match = rg.exec(t)) !== null) {
  let a = match[1];  // rgb value
  let b=match[2];
  let d=match[3];
  let letter = match[4]; // letter inside the span
  res.push(a+"-"+b+"-"+d);
}
//console.log(res.length);
//console.log("end worker");
/*let fres=t.matchAll(regex);
fres=[...fres]
for(let i of fres){
     //console.log(i);
    res.push({c:[i[1],i[2],i[3]],l:i[4]});
}
 for(let i of res){
     //console.log(i.letter)
 }*/
     return res;

    }
    
    function comAll(d){
    	let r="";
       for(let i of d)r+=i;
       return r;
    }
    
    
    onmessage=e=>{
    let d=e.data[0]
    let r=toPtText(comAll(d));
    postMessage([r,e.data[1],e.data[2]]);
    
    
    
    }