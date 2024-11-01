onmessage=e=>{
            let w=e.data[0];
            let r=JSON.stringify(w);
            let c=300;
            let d=Math.floor(r/c);
            for(let i=0;i<c;++i){
              let ec=i*d+d;;
              if(i==c-1)ec=r.length;
              let cr=r.slice(i*d,ec);
              postMessage([cr,i,c]);
            }
           // postMessage(r);
        }