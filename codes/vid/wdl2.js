onmessage=e=>{
	let r=e.data[0];
	let w=e.data[1];
	let h=e.data[2];
	let res=[];
	for(let i=0;i<r.length;++i){
		res[i]=[];
		for(let j=0;j<h;++j){
			for(let k=0;k<w;++k){
				let ind=j*w+k;
				let a=r[i][j][k][0];
				let b=r[i][j][k][1];
				let c=r[i][j][k][2];
				let s=a+"-"+b+"-"+c;
				res[i].push(a);
     res[i].push(b);
     res[i].push(c);
     res[i].push(255);
			}
		}
	}
	
	postMessage(res);
	
}