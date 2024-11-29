import{a as h,S as b,i as a}from"./assets/vendor-Be8boZEL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const S=async(o,e,l)=>(await h.get("https://pixabay.com/api",{params:{key:"47161865-40d939b38272e547a09e56cd8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:l,page:e}})).data,w=o=>o.map(e=>`
    <li class='gallery-item'>
      <a href=${e.largeImageURL}>
        <img alt=${e.tags} src=${e.webformatURL} class='gallery-image'/>
      </a>
      <ul class='list-info'>
        <li class='item-info'>
          <p class='title-info'>Likes</p>
          <p class='count-info'>${e.likes}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Views</p>
          <p class='count-info'>${e.views}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Comments</p>
          <p class='count-info'>${e.comments}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Downloads</p>
          <p class='count-info'>${e.downloads}</p>
        </li>
      </ul>
    </li>
    `).join(""),p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",y=document.querySelector(".form"),i=document.querySelector("ul.gallery"),n=document.querySelector(".loader"),c=document.querySelector(".button-search-more"),C=document.querySelector("section");let v=new b(".galery a",{captionsData:"alt",captionDelay:250});a.settings({timeout:4e3,position:"topRight"});let d=1,m=15,u="",g=0;const A=o=>{S(u,d,m).then(({hits:e,totalHits:l})=>{g=Math.ceil(l/m),o&&(i.innerHTML="",c.style.visibility="hidden");const r=w(e);if(r&&(n.style.display="none"),e.length===0&&(a.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),n.style.display="none",i.innerHTML=""),d+=1,o?i.innerHTML=r:i.insertAdjacentHTML("beforeend",r),c.style.visibility="visible",d+1>g)return n.style.display="none",c.style.visibility="hidden",a.info({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"We're sorry, but you've reached the end of search results."});const t=document.querySelector(".gallery-item"),{y:s}=t.getBoundingClientRect();window.scrollBy({top:-s*2,behavior:"smooth"}),v.refresh(),y.reset()}).catch(e=>{i.innerHTML="",a.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:e.message})})},L=o=>{if(o.preventDefault(),i.innerHTML="",n.style.display="block",u=o.target.elements.search.value.trim(),u===""){a.error({iconUrl:p,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"}),i.innerHTML="",n.style.display="none";return}A("first")},T=()=>{n.style.display="block",C.insertAdjacentElement("beforeend",n),A()};y.addEventListener("submit",L);c.addEventListener("click",T);
//# sourceMappingURL=index.js.map
