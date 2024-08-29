import{i as m,S as d}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=s=>{const r="https://pixabay.com/api/",i="45654098-015d10b92a1455385bf1e768f",o=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:"true"});return fetch(`${r}?key=${i}&q=${s}&${o}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},g=s=>`<li class="gallery-item">
    <a class="gallery-link" href="${s.largeImageURL}">
    <img class="gallery-image" src="${s.webformatURL}" alt="${s.tags}" />
    </a>
    <div class="wrapper">
    <ul class="img">
      <li class="text-item">
        Likes<span class="text">${s.likes}</span>
      </li>
      <li class="text-item">
        Views<span class="text">${s.views}</span>
      </li>
      <li class="text-item">
        Comments<span class="text">${s.comments}</span>
      </li>
      <li class="text-item">
        Downloads<span class="text">${s.downloads}</span>
      </li>
    </ul>
  </div>
    </li>`,l=document.querySelector(".forms"),n=document.querySelector(".gallery"),c=document.querySelector(".js-loader");function f(s){s.preventDefault();const r=l.elements.user.value.trim();p(r).then(e=>{e.hits.length===0&&(m.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML="",l.reset()),l.reset();const t=e.hits.map(u=>g(u)).join("");n.innerHTML=t,new d(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}).refresh()}).catch(e=>{console.log(e)});function i(){c.classList.remove("is-hidden")}function o(){c.classList.add("is-hidden")}i(),setTimeout(o,1e3)}l.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
