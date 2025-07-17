import{a as P,S as $,i as s}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const m=async(o,t)=>(await P.get("https://pixabay.com/api/",{params:{key:"51210764-f10f5a036eaba1aa23a71bd7f",q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}})).data,g=document.querySelector(".box-loader"),f=document.querySelector(".btn-more"),q=new $(".gallery-item a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".gallery");function y(o){const t=o.hits.map(({webformatURL:i,largeImageURL:c,tags:e,likes:r,views:l,comments:S,downloads:v})=>`<li class="gallery-item">
	<a class="gallery-link" href="${c}">
		<img 
		  class="gallery-image" 
		  src="${i}" 
		  alt="${e}" 
		/>
	</a>
  
  <ul class="list-description">
  <li class='item-description'><strong>Likes</strong> <p>${r}</p></li>
  <li class='item-description'><strong>Views</strong> <p>${l}</p></li>
  <li class='item-description'><strong>Comments</strong> <p>${S}</p></li>
  <li class='item-description'><strong>Downloads</strong> <p>${v}</p></li>
  </ul>
</li>
`).join("");h.insertAdjacentHTML("beforeend",t),q.refresh()}function x(){h.innerHTML=""}function L(){g.classList.remove("is-hidden")}function b(){g.classList.add("is-hidden")}function w(){f.classList.remove("is-hidden")}function a(){f.classList.add("is-hidden")}const p=document.querySelector(".form"),M=document.querySelector(".btn-more");let n=1,d="",u=0;const O=15;p.addEventListener("submit",o=>{o.preventDefault(),a(),n=1;const t=o.target.elements["search-text"].value.trim();if(d=t,t===""){s.error({title:"Please write word!",position:"topRight"});return}x(),L(),setTimeout(async()=>{try{const i=await m(t,n);if(i.hits.length===0){s.error({title:`Sorry, there are no images matching your search ${t}. Please try again!`,position:"topRight"}),a();return}u=Math.ceil(i.totalHits/O),n>=u&&(s.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a()),y(i),p.reset()}catch(i){s.error({title:i.message,position:"topRight"})}finally{b(),n<u&&w()}},1e3)});M.addEventListener("click",()=>{a(),L(),n+=1,setTimeout(async()=>{try{const o=await m(d,n);if(o.hits.length===0){s.error({title:`Sorry, there are no images matching your search ${d}. Please try again!`,position:"topRight"}),a();return}n>=u?(s.info({title:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a()):w(),y(o);let t=document.querySelector(".gallery-item");if(t){let i=t.getBoundingClientRect().height;scrollBy({top:i*2,behavior:"smooth"})}}catch(o){s.error({title:o.message})}finally{b()}},1e3)});
//# sourceMappingURL=index.js.map
