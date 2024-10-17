(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const m="/post1.jpg",u="/post2.jpg",p="/post3.jpg",g="/post4.jpg",v="/post5.jpg",y="/post6.jpg",d=[{description:"Sexiest librarian you’ll ever see 👧🏻🤓😈 dm me for a long vid 💦",image:m,quantity:5,date:"5 hours ago"},{description:"Shot so much new stuff today 🥵💦 which pics your fave?",image:u,quantity:3,date:"2 days ago"},{description:"Strawberry set is way too good to miss out on 🥵🥵🍓",image:p,quantity:4,date:"3 days ago"},{description:"Nudes are exclusively reserved only for my VIPs on here 🥵🥵",image:g,quantity:3,date:"5 days ago"},{description:"Shooting content for ya'll like 😋😈",image:v,quantity:3,date:"5 days ago"},{description:"Always giving you the best views ;) front and back 🥵",image:y,quantity:2,date:"6 days ago"}],b=document.querySelector(".photo-posts");d.forEach(e=>{const t=document.createElement("li");t.innerHTML=`
             <div class="content-item-header"
              id="photos"
              role="tabpanel"
              aria-labelledby="photos-tab"> 
                <img class="content-item-avatar" src="/avatar.webp" />
                <div>
                  <p class="content-item-name">
                    JennyPinky <img src="/verified.svg" width="17" /><span
                      >@jennypinky</span
                    >
                  </p>
                  <p class="day-ago">${e.date}</p>
                </div>
              </div>
              <p class="content-item-description">${e.description}</p>
              <div class="content-item-image">
                <img src=${e.image} alt="" />
                <div class="subscribe-wrapper">
                	<img src="/unlock.svg" alt="" width="50"/>
                	<button class="btn btn-primary must-subscribe-button">You must subscribe to view this post.</button>
                	<div><img class="post-image-icon" src="/image.svg" alt=""/><span>${e.quantity}</span></div>
								</div>
              </div>
              <div class="content-item-buttons">
                <img src="/heart-solid.svg" alt="" width="27" />
                <img src="/message-circle.svg" alt="" width="27" />
                <img class="share-button" data-bs-toggle="modal" data-bs-target="#exampleModal" src="/share-solid.svg" alt="" width="27" />
                <img src="/bookmark.svg" alt="" width="27" />
              </div>`,b.appendChild(t)});const h="/video.mp4",f="/video2.mp4",w="/video3.mp4",P="/video4.mp4",q="/video5.mp4",l=[{description:"If your balls are full send me a DM.. I would love to show you how i would drain them 😏👅🍆",video:h,quantity:5,date:"10 hours ago"},{description:"you have your submissive hillbilly gf on a leash all for your enjoyment🧑‍🌾 includes new JOI for all subs<3",video:f,quantity:5,date:"2 days ago"},{description:"hey i’m back w a devious strip tease vid😈did yall miss me?",video:w,quantity:5,date:"4 days ago"},{description:"I’m so horny today😩can’t wait to show you guys my nips ;p",video:P,quantity:5,date:"7 days ago"},{description:"come fck me on my gaming chair😩💗 #cosplay #gamergirl #catgirl ",video:q,quantity:5,date:"10 days ago"}],k=document.querySelector(".video-posts");l.forEach(e=>{const t=document.createElement("li");t.innerHTML=`
              <div class="content-item-header"
              id="videos"
              role="tabpanel"
              aria-labelledby="videos-tab"> 
                <img class="content-item-avatar" src="/avatar.webp" />
                <div>
                  <p class="content-item-name">
                    JennyPinky <img src="/verified.svg" width="17" /><span
                      >@jennypinky</span
                    >
                  </p>
                  <p class="day-ago">${e.date}</p>
                </div>
              </div>
              <p class="content-item-description">${e.description}</p>
              <div class="content-item-image">
                <video loop autoplay src="${e.video}" muted width="100%"></video>
                <div class="subscribe-wrapper">
                	<img src="/unlock.svg" alt="" width="50"/>
                	<button class="btn btn-primary must-subscribe-button">You must subscribe to view this post.</button>
                	<div><img class="post-image-icon" src="/image.svg" alt=""/><span>${e.quantity}</span></div>
								</div>
              </div>
              <div class="content-item-buttons">
                <img src="/heart-solid.svg" alt="" width="27" />
                <img src="/message-circle.svg" alt="" width="27" />
                <img class="share-button" data-bs-toggle="modal" data-bs-target="#exampleModal" src="/share-solid.svg" alt="" width="27" />
                <img src="/bookmark.svg" alt="" width="27" />
              </div>`,k.appendChild(t)});function c(e){const[t,a]=e.split(" "),i=new Date;switch(a){case"day":case"days":i.setDate(i.getDate()-parseInt(t));break;case"hour":case"hours":i.setHours(i.getHours()-parseInt(t));break;case"minute":case"minutes":i.setMinutes(i.getMinutes()-parseInt(t));break;default:throw new Error("Unsupported date unit")}return i}const S=[...d,...l].sort((e,t)=>c(t.date)-c(e.date)),E=document.querySelector(".all-posts");S.forEach(e=>{const t=!!e.image;let a;t?(a=document.createElement("img"),a.src=e.image):(a=document.createElement("video"),a.src=e.video,a.loop=!0,a.autoplay=!0,a.muted=!0);const i=document.createElement("li");i.innerHTML=`
             <div class="content-item-header"
              id="posts"
              role="tabpanel"
              aria-labelledby="posts-tab"> 
                <img class="content-item-avatar" src="/avatar.webp" />
                <div>
                  <p class="content-item-name">
                    JennyPinky <img src="/verified.svg" width="17" alt=""/><span
                      >@jennypinky</span
                    >
                  </p>
                  <p class="day-ago">${e.date}</p>
                </div>
              </div>
              <p class="content-item-description">${e.description}</p>
              <div class="content-item-image">
                <div class="subscribe-wrapper">
                	<img src="/unlock.svg" alt="" width="50"/>
                	<button class="btn btn-primary must-subscribe-button">You must subscribe to view this post.</button>
                	<div><img class="post-image-icon" src="/image.svg" alt=""/><span>${e.quantity}</span></div>
				</div>
              </div>
              <div class="content-item-buttons">
                <img src="/heart-solid.svg" alt="" width="27" />
                <img src="/message-circle.svg" alt="" width="27" />
                <img class="share-button" src="/share-solid.svg" data-bs-toggle="modal" data-bs-target="#exampleModal" alt="" width="27" />
                <img src="/bookmark.svg" alt="" width="27" />
              </div>`,E.appendChild(i),i.querySelector(".content-item-image").appendChild(a)});const I=[].slice.call(document.querySelectorAll(".offcanvas"));I.map(function(e){return new bootstrap.Offcanvas(e)});const r=document.querySelector(".field button"),O=document.querySelector(".field input");document.addEventListener("DOMContentLoaded",()=>{console.log("test")});r.addEventListener("click",()=>{window.navigator.clipboard.writeText(O.value),r.innerText="Copied",setTimeout(()=>{r.innerText="Copy"},2e3)});
