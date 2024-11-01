let tarr=[];
let iarr=[];
const W=60;
const H=30;

let l="N";
let n="012";

for(let i=0;i<H;++i){
	for(let j=0;j<W;++j){
		let ind=i*W+j;
		let cl=l[Math.floor(Math.random()*l.length)];
		let cn=n[Math.floor(Math.random()*n.length)];
		tarr.push(cl);
		iarr.push(cn);
	}
}


function rp(w,h,d,t){
        
            for(let i=0;i<h;++i){
                for(let j=0;j<w;++j){
                let c="x"+j+"y"+i;
               let re=new RegExp(`(${c}["']\\s)[^>]*`,"gi");
                t=t.replace(re,"$1style='color:rgb("+d[i][j][0]+","+d[i][j][1]+","+d[i][j][2]+")'");
                }
            }
            return t;
        }
        
        function rp2(w,h,d,s,dv,b){
        	 let rt="";
             let ch=Math.floor(s/w);
             let cw=s%w;
             let ct=0;
        	 for(let i=ch;i<h;++i){
        	   if((i!=ch||cw==0)&&i!=0)rt+="<br>";
           let ws=0;
           if(i==ch) ws=cw;
        	   for(let j=ws;j<w;++j){
        	      let ind=i*w+j;
        	       let c="x"+j+"y"+i;
        	        rt+="<span data-xy='"+c+"' data-i='"+iarr[ind]+"' style='color:rgb("+d[i][j][0]+","+d[i][j][1]+","+d[i][j][2]+")'>"+tarr[ind]+"</span>";
                   ct++;
                   if(ct>=dv&&!b) return rt;
              }
              }
              return rt;
            }

function simp(w,h,d,s,dv,b){
let rt="";
             let ch=Math.floor(s/w);
             let cw=s%w;
             let ct=0;
        	 for(let i=ch;i<h;++i){
        	   if((i!=ch||cw==0)&&i!=0)rt+="<br>";
           let ws=0;
           if(i==ch) ws=cw;
        	   for(let j=ws;j<w;++j){
        	      let ind=i*w+j;
        	       let c="x"+j+"y"+i;
        	        rt+="<span data-xy='"+c+"' data-i='"+iarr[ind]+"' style='color:rgb("+d[i][j][0]+","+d[i][j][1]+","+d[i][j][2]+")'>"+tarr[ind]+"</span>";
                   ct++;
                   if(ct>=dv&&!b) return rt;
              }
              }
              return rt;

}
        onmessage=e=>{
            let w=e.data[0];
            let h=e.data[1];
            let data=e.data[2];
            let i=e.data[3];
            let dv=e.data[4];
            let s=i*dv;
            let WL=e.data[5];
            let b=false;
            if(i==WL-1)b=true;
            let r=rp2(w,h,data,s,dv,b);
            let arr=[r,e.data[6],e.data[7],e.data[3]];
            postMessage(arr);
        }