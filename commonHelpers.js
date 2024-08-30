import{S as m,i as n}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=r=>{const s="https://pixabay.com/api/",o="45654098-015d10b92a1455385bf1e768f",i=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:"true"});return fetch(`${s}?key=${o}&q=${r}&${i}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})},p=r=>`<li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}">
    <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
    </a>
    <div class="wrapper">
    <ul class="img">
      <li class="text-item">
        Likes<span class="text">${r.likes}</span>
      </li>
      <li class="text-item">
        Views<span class="text">${r.views}</span>
      </li>
      <li class="text-item">
        Comments<span class="text">${r.comments}</span>
      </li>
      <li class="text-item">
        Downloads<span class="text">${r.downloads}</span>
      </li>
    </ul>
  </div>
  </li>`,l=document.querySelector(".forms"),c=document.querySelector(".gallery"),u=document.querySelector(".js-loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function f(r){r.preventDefault();const s=l.elements.user.value.trim();function o(){u.classList.remove("is-hidden")}function i(){u.classList.add("is-hidden")}if(o(),s===""){n.warning({position:"topRight",message:"Fill in the input field"}),i();return}d(s).then(e=>{e.hits.length===0&&(n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),c.innerHTML="");const t=e.hits.map(a=>p(a)).join("");c.innerHTML=t,g.refresh()}).catch(e=>{n.error({position:"topRight",message:"An error occurred"})}).finally(()=>{i()}),l.reset()}l.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers.js.map
