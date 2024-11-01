let gdataL=[
"a_a.js"
];

let gpixelL=[
"csuper1.js",
"catt.js",
"cditto1.js",
"comg1.js"
]

let gdur=[
[102,102+68],[0,102],[102+68,102+68+42],[212,325]
]

let dtextL=[
"bd.js"
];

let auUrls=[
"csuper1.m4a",
"ctry.m4a",
"cditto1.m4a",
"comg1.m4a"
];

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
     let scs=document.querySelectorAll("script");
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