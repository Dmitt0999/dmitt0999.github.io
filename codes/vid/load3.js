let gdataL=[
"a_a.js"
];

let gpixelL=[
"tomg1.js",
"tditto1.js",
"tsuper1.js",
"tatt1.js",
"cbubblegum1.js",
"churt1.js"
]

let gdur=[
[0,103],[103,152],[152,212],[212,282],[282,321],[321,377]
]

let dtextL=[
"bd.js"
];

let auUrls=[
"tomg1.m4a",
"tditto1.m4a",
"tsuper1.m4a",
"tatt1.m4a",
"tatt1.m4a",
"tatt1.m4a"
];

let ginfoT=[
{
	title:"OMG"
},
{
	title:"Ditto"
},
{
	title:"Supernatural"
},
{
	title:"Attention"
}
]

let scList=[];

let W=60;
let H=30;
let GTT=0;
let lGTT=0;
let glIn=null;

function loadSc(ob,dur=gdur,f=()=>{}){
   GTT=ob.length;
   for(let i=0;i<ob.length;++i){
     let sc=document.createElement("script");
     sc.src="./r/"+ob[i];
     sc.setAttribute("data-oind",i);
     let p=dur[i];
     if(p!=null){
       sc.setAttribute("data-s",p[0]);
       sc.setAttribute("data-e",p[1]);
     }
     let scs=document.querySelector("script");
     document.body.appendChild(sc);
     sc.onload=e=>{
     	e.target.setAttribute("data-ind",lGTT);
       
         lGTT++;
         console.log("lGTT now is :"+lGTT);
         scList.push(e.target);
     }
    }
   
    glIn=setInterval(()=>{
       if(lGTT>=GTT){
          clearInterval(glIn);
          console.log("Done load all sc");
          f();
       }
    },500);
}