const T=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};T();const b={slideUp:function(e,t=500){return new Promise(function(n,l){e.style.height=e.offsetHeight+"px",e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.offsetHeight,e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,window.setTimeout(function(){e.style.display="none",e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),n(!1)},t)})},slideDown:function(e,t=500){return new Promise(function(n,l){e.style.removeProperty("display");let o=window.getComputedStyle(e).display;o==="none"&&(o="block"),e.style.display=o;let r=e.offsetHeight;e.style.overflow="hidden",e.style.height=0,e.style.paddingTop=0,e.style.paddingBottom=0,e.style.marginTop=0,e.style.marginBottom=0,e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(function(){e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property")},t)})},slideToggle:function(e,t=500){return window.getComputedStyle(e).display==="none"?this.slideDown(e,t):this.slideUp(e,t)}};let u=Date.now();console.log("\x1B[32m%s","--------------------START--------------------");const m="\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0438\u0440!";console.log(m);let i=[];Array.from(m).forEach(e=>{i.push(e)});console.log(i);i.forEach(e=>{console.log(e)});const x=i.join("");console.log(x);console.log("\x1B[32m%s","--------------------END--------------------");console.log("\x1B[32m%s","--------------------START--------------------");function P(){const e={title:"Once Upon a Time",protagonist:{name:"Emma Swan",enemies:[{name:"Regina Mills",title:"Evil Queen"},{name:"Cora Mills",title:"Queen of Hearts"},{name:"Peter Pan",title:"The boy who wouldn't grow up"},{name:"Zelena",title:"The Wicked Witch"}]}},{title:t,protagonist:{name:n},protagonist:{enemies:{3:l}},enemyTitle:o=l.title,enemyName:r=l.name}=e;return`${r} (${o}) is an enemy to ${n} in "${t}"`}console.log(P());console.log("\x1B[32m%s","--------------------END--------------------");console.log("\x1B[32m%s","--------------------START--------------------");function d(e=5,t=5){return e+t}console.log(d());console.log(d(10));console.log(d(10,10));console.log("\x1B[32m%s","--------------------END--------------------");console.log("\x1B[32m%s","--------------------START--------------------");let y=Date.now(),S=30,c=1,h=[];for(let e=0;e<S;e++)c+=c,h.push(c);console.log(h);y=Date.now()-y;console.log(`\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u044F = ${y} \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434`);console.log("\x1B[32m%s","--------------------END--------------------");console.log("\x1B[32m%s","--------------------START--------------------");const A=document.querySelectorAll(".test-gallery-container div");function v(e){if(!e.length)return;const[t,n,...l]=e;return t.innerHTML="<p>\u0422\u0415\u0421\u0422\u041E\u0412\u042B\u0419 \u0422\u0415\u041A\u0421\u0422</p>",n.innerHTML='<img src="https://via.placeholder.com/300x200?text=\u0422\u0415\u0421\u0422\u041E\u0412\u0410\u042F%20\u041A\u0410\u0420\u0422\u0418\u041D\u041A\u0410">',v(l)}v(A);console.log("\x1B[32m%s","--------------------END--------------------");u=Date.now()-u;console.log("%c%s","color: green; font: 1.5rem Tahoma;",`\u0412\u0440\u0435\u043C\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u044D\u0442\u043E\u0439 \u0447\u0430\u0441\u0442\u0438 \u0441\u043A\u0440\u0438\u043F\u0442\u0430 = ${u} \u043C\u0438\u043B\u043B\u0438\u0441\u0435\u043A\u0443\u043D\u0434`);const E=document.querySelectorAll(".test-alert .new_alert_button");let p;const D=document.querySelector(".alerts");function w(){p=document.querySelectorAll(".alerts .alert .alert_close"),p.forEach(e=>{e.onclick=()=>{document.querySelectorAll(".alerts .alert").forEach(n=>{n.style.display=="none"&&n.parentElement.removeChild(n)});let t=e.parentElement;b.slideToggle(t)}})}function q(e){D.innerHTML+=`
    <div class="alert">
      <span class="alert_text">${e}</span>
      <button class="alert_close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    `,w()}w();E.forEach(e=>{e.onclick=()=>{q("\u042B\u042B\u042B")}});const g=document.querySelector(".calc"),f=document.querySelector(".calc #asd"),s=document.createElement("span");s.className="warn";const N=document.querySelector(".calc .result"),[C,k]=document.querySelectorAll(".calc .inputs input"),L=document.querySelector(".calc .buttons .button.get_result"),R=e=>{N.value=e},H={"+":(e,t)=>e+t,"-":(e,t)=>e-t,"/":(e,t)=>e/t,"*":(e,t)=>e*t};L.onclick=()=>{f.operation.value?(document.querySelector(".calc .warn")&&g.removeChild(s),R(H[f.operation.value](parseFloat(C.value),parseFloat(k.value)))):(g.appendChild(s),s.innerText="\u0412\u044B \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043B\u0438 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044E!")};
