import{a as h,S as b,i as c}from"./assets/vendor-Be8boZEL.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const S=async(o,e,a)=>(await h.get("https://pixabay.com/api/",{params:{key:"47161865-40d939b38272e547a09e56cd8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:e}})).data,w=o=>o.map(e=>`
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
    `).join(""),y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",g=document.querySelector(".form"),l=document.querySelector("ul.gallery"),i=document.querySelector(".loader"),r=document.querySelector(".button-search-more"),C=document.querySelector("section");let v=new b(".galery a",{captionsData:"alt",captionDelay:250});c.settings({timeout:4e3,position:"topRight"});let f=1,m=15,u="",p=0;const A=o=>{o&&(f=1),S(u,f,m).then(({hits:e,totalHits:a})=>{p=Math.ceil(a/m),o&&(l.innerHTML="",r.style.visibility="hidden");const n=w(e);if(n&&(i.style.display="none"),e.length===0&&(c.error({iconUrl:y,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),i.style.display="none",l.innerHTML=""),o?l.innerHTML=n:l.insertAdjacentHTML("beforeend",n),r.style.visibility="visible",r.style.display="block",f+1>p)return i.style.display="none",r.style.visibility="hidden",p===0?void 0:c.info({iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"We're sorry, but you've reached the end of search results."});const t=document.querySelector(".gallery-item"),{y:s}=t.getBoundingClientRect();window.scrollBy({top:-s*2,behavior:"smooth"}),v.refresh(),g.reset()}).catch(e=>{i.style.display="none",l.innerHTML="",r.style.display="none",c.error({iconUrl:y,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:e.message})})},L=o=>{if(o.preventDefault(),l.innerHTML="",i.style.display="block",u=o.target.elements.search.value.trim(),r.style.display="none",u===""){c.error({iconUrl:y,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"}),l.innerHTML="",i.style.display="none";return}A("first")},T=()=>{r.style.display="none",i.style.display="block",C.insertAdjacentElement("beforeend",i),f+=1,A()};g.addEventListener("submit",L);r.addEventListener("click",T);
//# sourceMappingURL=index.js.map
