const apiKey="2360627ee76f48c1845268ac690e9496";
let url1=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`;
async function fetchapi(url){
    try{
        let res=await fetch(url);
        let data=await res.json();
        let detail=document.querySelectorAll(".detail");
        let i=0;
        for(let c=0;c<9;c++){
            if (data.articles[i].description===null){
                i++;
            };
            let s=data.articles[i].urlToImage;
            let img=document.createElement("img");
            img.src=s; 
            detail[c].appendChild(img);
            let p1=document.createElement("p");
            p1.innerText=data.articles[i].title;
            detail[c].appendChild(p1);
            p1.classList.add("p1")
            let p2=document.createElement("p");
            p2.innerText=data.articles[i].description+"...";
            detail[c].appendChild(p2);
            p2.classList.add("p2");
            let p3=document.createElement("p");
            p3.innerHTML=`Read full article <div class="arrow"><span class="material-symbols-outlined">arrow_forward</span></div>`;
            detail[c].appendChild(p3);
            p3.classList.add("p3");
            i++;
        }
        
    }catch(err){
        console.log("error",err);
    }
}
fetchapi(url1);
function cleardiv(){
    let detail=document.querySelectorAll(".detail");
    for(let i=0;i<9;i++){
        while (detail[i].firstChild) {
            detail[i].removeChild(detail[i].firstChild);
          }   
}}
let btn=document.querySelector(".searchbar button");
btn.addEventListener("click",()=>{
    let inp=document.querySelector(".searchbar input")
    let val=inp.value;
    let url2=`https://newsapi.org/v2/everything?q=${val}&apiKey=${apiKey}`
    cleardiv();
    if (val==""){
        fetchapi(url1);
    }else{
        fetchapi(url2);
    }

})
