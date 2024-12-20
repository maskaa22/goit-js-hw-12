import{a as h,S as b,i as c}from"./assets/vendor-Be8boZEL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const w=async(o,t,a)=>{const r="https://pixabay.com/api/";try{return(await h.get(r,{params:{key:"47161865-40d939b38272e547a09e56cd8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:t}})).data}catch(e){throw e}},S=o=>o.map(t=>`
    <li class='gallery-item'>
      <a href=${t.largeImageURL}>
        <img alt=${t.tags} src=${t.webformatURL} class='gallery-image'/>
      </a>
      <ul class='list-info'>
        <li class='item-info'>
          <p class='title-info'>Likes</p>
          <p class='count-info'>${t.likes}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Views</p>
          <p class='count-info'>${t.views}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Comments</p>
          <p class='count-info'>${t.comments}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Downloads</p>
          <p class='count-info'>${t.downloads}</p>
        </li>
      </ul>
    </li>
    `).join(""),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",g=document.querySelector(".form"),l=document.querySelector("ul.gallery"),n=document.querySelector(".loader"),i=document.querySelector(".button-search-more"),C=document.querySelector("section");let v=new b(".gallery a");c.settings({timeout:4e3,position:"topRight"});let f=1,m=15,u="",y=0;const A=async o=>{o&&(f=1);try{const{hits:t,totalHits:a}=await w(u,f,m);y=Math.ceil(a/m),o&&(l.innerHTML="",i.style.visibility="hidden");const r=S(t);if(r&&(n.style.display="none"),t.length===0&&(c.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none",l.innerHTML=""),o?l.innerHTML=r:l.insertAdjacentHTML("beforeend",r),i.style.visibility="visible",i.style.display="block",f+1>y)return n.style.display="none",i.style.visibility="hidden",y===0?void 0:c.info({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"We're sorry, but you've reached the end of search results."});const e=document.querySelector(".gallery-item"),{y:s}=e.getBoundingClientRect();window.scrollBy({top:-s*2,behavior:"smooth"}),v.refresh(),g.reset()}catch(t){n.style.display="none",l.innerHTML="",i.style.display="none",c.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:t.message})}},L=async o=>{if(o.preventDefault(),l.innerHTML="",n.style.display="block",u=o.target.elements.search.value.trim(),i.style.display="none",u===""){c.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"}),l.innerHTML="",n.style.display="none";return}await A("first")},T=async()=>{i.style.display="none",n.style.display="block",C.insertAdjacentElement("beforeend",n),f+=1,await A()};g.addEventListener("submit",L);i.addEventListener("click",T);
//# sourceMappingURL=index.js.map
