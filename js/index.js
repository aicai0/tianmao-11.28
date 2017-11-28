/*
* @Author: aicai
* @Date:   2017-11-08 19:48:58
* @Last Modified by:   aicai
* @Last Modified time: 2017-11-21 01:02:35
*/
window.onload=function(){
	//轮播图效果
	let bannerpic=document.getElementsByClassName("banner-pic")[0];
	console.log(bannerpic);
	let bannerpicli=bannerpic.getElementsByTagName("li");
    console.log(bannerpicli);
    let bannerbac=document.getElementsByClassName("banner-bac")[0];
    let bannerbaccolor=["#8A6745","#E8E8E8","#0865E6","#E8E8E8","#A4C5A6","#7F26DC"]
    let lastbtn=document.getElementsByClassName("last-btn")[0];
    let lastbtnli=lastbtn.getElementsByTagName("li");
    let banner=document.getElementsByClassName("banner")[0];

    console.log(lastbtn);
    console.log(lastbtnli);

	let t=setInterval(fn, 1000);
	let num=0;
    
    banner.onmouseover=function(){
    	clearInterval(t);
    }
    banner.onmouseout=function(){
    	t=setInterval(fn, 1000);
    }
    
	function fn(){
		num++;
		if(num==bannerpicli.length){
           num=0; 
		}
		for(let i=0;i<bannerpicli.length;i++){
			bannerpicli[i].className="";
            lastbtnli[i].style.background="#c8bfaf";
		}
		   bannerpicli[num].className="active";
		   bannerbac.style.background=bannerbaccolor[num];
		   bannerpic.style.background=bannerbaccolor[num];
		   lastbtnli[num].style.background="#27271e";
	}
    for(let i=0;i<lastbtnli.length;i++){
    	 lastbtnli[i].onclick=function(){
    	   bannerpicli[num].className="";
    	   bannerpicli[i].className="active";
		   bannerbac.style.background=bannerbaccolor[i];
		   bannerpic.style.background=bannerbaccolor[i];
		   lastbtnli[num].style.background="#c8bfaf";
		   lastbtnli[i].style.background="#27271e";
		   num=i;
    	 }
    }
	
   //banner效果
   let celanitem=document.getElementsByClassName("celan-item");
   let celanword=document.getElementsByClassName("celan-word")[0];
   let celanwordli=celanword.getElementsByTagName("li");
   console.log(celanitem,celanword,celanwordli);

   for(let i=0;i<celanwordli.length;i++){
   	celanwordli[i].onmouseover=function(){
   	   celanitem[i].style.display="block";
   	}
   	celanwordli[i].onmouseout=function(){
   	   celanitem[i].style.display="none";
   	}
   }
   //我的淘宝效果
   let wdtbfb=document.getElementsByClassName("wdtbfb")[0];
   let wdtb=document.getElementsByClassName("wdtb")[0];
   console.log(wdtbfb,wdtb);
   wdtbfb.onmouseover=function(){
     wdtb.style.height="60px";
   }
   wdtbfb.onmouseout=function(){
     wdtb.style.height="0";
   }
   //收藏效果
   let scjfb=document.getElementsByClassName("scjfb")[0];
   let scj=document.getElementsByClassName("scj")[0];
   console.log(scjfb)
    console.log(scj)
   scjfb.onmouseover=function(){
   	 scj.style.height="60px";
   }
   scjfb.onmouseout=function(){
   	 scj.style.height="0";
   }
   //导航效果
   let wzdh=document.querySelector(".header-dh");
   
   let dhhid=document.querySelector(".header-dh .dhhid");
   console.log(wzdh,dhhid);
   wzdh.onmouseover=function(){
     dhhid.style.display="block";
   }
   wzdh.onmouseout=function(){
     dhhid.style.display="none";
   }
   //楼层跳转
   let lc0=document.querySelector("nav");
   let lc1=document.querySelector(".tmcs-bac");
   let lc2=document.querySelector(".tmgj-bac");
   let lc3=document.querySelector(".mlrs-bac");
   let lc4=document.querySelector(".cdkw-bac");
   let lc5=document.querySelector(".jjsh-bac");
   let lc6=document.querySelector(".dzac-bac");
   let lc7=document.querySelector(".hwcx-bac");
   let lc8=document.querySelector(".cnxh-bac");

   let arrcolor=["#ff0036","#64C333","#000","#EA5F8D","#0aa6e8",
                  "#64C333","#F15453","#19C8A9","#000","#ababab"];


   let arrlc=[lc0,lc1,lc2,lc3,lc4,lc5,lc6,lc7,lc8];
   console.log(arrlc);
   
   let lcbtns=document.querySelector(".gdaside");
   console.log(lcbtns);
   let lcbtn=document.querySelectorAll(".gdaside a");
   console.log(lcbtn);
  
 
   /*lcbtnfh.onclick=function(){
       animate(document.documentElement,{scrollTop:0},1000);
       animate(document.body,{scrollTop:0},1000);
   }*/
   

   window.onscroll=function(){
       let obj=document.body.scrollTop?document.body:document.documentElement;
       let scrolTop=obj.scrollTop;
      
        for(let j=1;j<=arrlc.length-1;j++){
            if(scrolTop+300>=arrlc[j].offsetTop){
              
                 for(let i=0;i<lcbtn.length;i++){
                     lcbtn[i].style.background="";       
                 }
                 // for(let k=0;k<arrcolor.length;k++){
                 //  // /*console.log(k);
                 //  console.log(arrcolor[k]);
                 console.log(j);
                  lcbtn[j].style.background=arrcolor[j]; 
                 // }       
            }
        }
        let hidden=document.querySelector(".hidden");
        if(scrolTop>=arrlc[0].offsetTop){
            animate(hidden,{top:0},200);
            lcbtns.className="gdaside gdasidehe";
            // console.log(lcbtns);
        }else{
            animate(hidden,{top:-50},200);
            lcbtns.className="gdaside";
            // console.log(lcbtns);
        }
   }

   lcbtn.forEach(function(dom,index){
      if(index==9){
        dom.onclick=function(){
           animate(document.documentElement,{scrollTop:0},1000);
           animate(document.body,{scrollTop:0},1000);
        }
      }else{
       dom.onclick=function(){
         let obj=document.body.scrollTop?document.body:document.documentElement;
         // obj.scrollTop=arrlc[index].offsetTop;
         animate(obj,{scrollTop:arrlc[index].offsetTop});
       }
      } 
   });

}