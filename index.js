import{a as P,S as $,i as s}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d=async(o,t)=>(await P.get("https://pixabay.com/api/",{params:{key:"51210764-f10f5a036eaba1aa23a71bd7f",q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data,p=document.querySelector(".box-loader"),f=document.querySelector(".btn-more"),q=new $(".gallery-item a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".gallery");function m(o){const t=o.hits.map(({webformatURL:i,largeImageURL:l,tags:e,likes:r,views:a,comments:w,downloads:S})=>`<li class="gallery-item">
	<a class="gallery-link" href="${l}">
		<img 
		  class="gallery-image" 
		  src="${i}" 
		  alt="${e}" 
		/>
	</a>
  
  <ul class="list-description">
  <li class='item-description'><strong>Likes</strong> <p>${r}</p></li>
  <li class='item-description'><strong>Views</strong> <p>${a}</p></li>
  <li class='item-description'><strong>Comments</strong> <p>${w}</p></li>
  <li class='item-description'><strong>Downloads</strong> <p>${S}</p></li>
  </ul>
</li>
`).join("");h.insertAdjacentHTML("beforeend",t),q.refresh()}function x(){h.innerHTML=""}function g(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}function L(){f.classList.remove("is-hidden")}function b(){f.classList.add("is-hidden")}const u=document.querySelector(".form"),M=document.querySelector(".btn-more");let n=1,v="",c=0;const O=15;u.addEventListener("submit",async o=>{o.preventDefault(),b(),n=1;const t=o.target.elements["search-text"].value.trim();if(v=t,t===""){s.error({title:"Please write word!",position:"topRight"});return}x(),g();try{const i=await d(t,n);if(i.hits.length===0){s.error({title:`Sorry, there are no images matching your search ${t}. Please try again!`,position:"topRight"});return}c=Math.ceil(i.totalHits/O),n>=c?s.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}):L(),m(i),u.reset()}catch(i){s.error({title:i.message,position:"topRight"})}finally{y()}});M.addEventListener("click",async()=>{b(),g(),n+=1;try{const o=await d(v,n);if(o.hits.length===0){s.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}n>=c?s.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}):L(),m(o);let t=document.querySelector(".gallery-item");if(t){let i=t.getBoundingClientRect().height;scrollBy({top:i*2,behavior:"smooth"})}}catch(o){s.error({title:o.message})}finally{y()}});
//# sourceMappingURL=index.js.map
