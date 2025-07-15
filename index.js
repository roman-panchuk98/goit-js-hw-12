import{a as $,S as q,i as n}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&u(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const m=async(i,t)=>(await $.get("https://pixabay.com/api/",{params:{key:"51210764-f10f5a036eaba1aa23a71bd7f",q:i.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data,p=document.querySelector(".box-loader"),f=document.querySelector(".btn-more"),x=new q(".gallery-item a",{captionsData:"alt",captionDelay:250}),g=document.querySelector(".gallery");function h(i){const t=i.hits.map(({webformatURL:r,largeImageURL:u,tags:e,likes:o,views:a,comments:v,downloads:S})=>`<li class="gallery-item">
	<a class="gallery-link" href="${u}">
		<img 
		  class="gallery-image" 
		  src="${r}" 
		  alt="${e}" 
		/>
	</a>
  
  <ul class="list-description">
  <li class='item-description'><strong>Likes</strong> <p>${o}</p></li>
  <li class='item-description'><strong>Views</strong> <p>${a}</p></li>
  <li class='item-description'><strong>Comments</strong> <p>${v}</p></li>
  <li class='item-description'><strong>Downloads</strong> <p>${S}</p></li>
  </ul>
</li>
`).join("");g.insertAdjacentHTML("beforeend",t),x.refresh()}function M(){g.innerHTML=""}function y(){p.classList.remove("is-hidden")}function L(){p.classList.add("is-hidden")}function b(){f.classList.remove("is-hidden")}function l(){f.classList.add("is-hidden")}const d=document.querySelector(".form"),P=document.querySelector(".btn-more");let s=1,w="",c=0;d.addEventListener("submit",i=>{i.preventDefault(),l(),s=1;const t=i.target.elements["search-text"].value.trim();if(w=t,t==="")return n.error({title:"Please write word!",position:"topRight"}),d.reset();M(),y(),setTimeout(async()=>{try{const r=await m(t,s);if(r.hits.length===0){n.error({title:`Sorry, there are no images matching your search ${t}. Please try again!`,position:"topRight"}),l();return}c=Math.ceil(r.totalHits/r.hits.length),s>=c&&(n.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l()),h(r)}catch(r){n.error({title:r.message,position:"topRight"})}finally{L(),s<c&&b()}},1e3),d.reset()});P.addEventListener("click",()=>{l(),y(),s+=1,setTimeout(async()=>{try{const i=await m(w,s);s>=c&&(n.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}),l()),h(i);let r=document.querySelector(".gallery-item").getBoundingClientRect().height;scrollBy({top:r*2,behavior:"smooth"})}catch(i){n.error({title:i.message})}L(),s<c&&b()},1e3)});
//# sourceMappingURL=index.js.map
