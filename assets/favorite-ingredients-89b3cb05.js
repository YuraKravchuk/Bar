import"./sprite-55006ff5.js";import{L as a,p as I,g as p,r as L,a as S,b as y,d}from"./tui-lib-pagination-69cfeffa.js";const o=document.querySelector(".favorite-ingredients-list"),r=document.querySelector(".placeholder-empty-favorite-list");function h(){const i=JSON.parse(localStorage.getItem(a.INGREDIENTS))||[];if(!i.length){o.classList.add("visually-hidden"),r.classList.remove("visually-hidden"),r.closest(".favorite-section").classList.add("is-empty");return}localStorage.setItem(a.CURRENT_DATA,JSON.stringify(i));const e=I(6,o,d);r.classList.add("visually-hidden"),r.closest(".favorite-section").classList.remove("is-empty"),o.classList.remove("visually-hidden"),o.addEventListener("click",s=>{N(s,e)})}function N(i,e){const s=i.target;s.closest(".remove-from-localstorage-btn")&&E(s,e),s.closest(".learn-more-btn")&&T(s,e)}async function T(i,e){const s=i.closest(".favorite-ingredient-item").dataset.id,t=await p(s);L(...t),S(),y(t,a.INGREDIENTS,d,e)}function E(i,e){var u;const s=i.closest(".favorite-ingredient-item").dataset.id;let t=JSON.parse(localStorage.getItem(a.INGREDIENTS))||[];const c=t.findIndex(f=>f._id===s);if(c!==-1&&(t.splice(c,1),localStorage.setItem(a.INGREDIENTS,JSON.stringify(t)),localStorage.setItem(a.CURRENT_DATA,JSON.stringify(t))),!t.length){o.classList.add("visually-hidden"),r.classList.remove("visually-hidden"),r.closest(".favorite-section").classList.add("is-empty");return}const v=document.querySelector("#tui-pagination-container");if(t.length<=((u=e==null?void 0:e._options)==null?void 0:u.itemsPerPage)){v.classList.add("is-hidden"),o.innerHTML=d(t);return}const n=e.getCurrentPage(),l=e._options.itemsPerPage;e.setTotalItems(t.length);const g=e._options.totalItems,m=(n-1)*l;o.innerHTML=d(t.slice(m,m+l)),g%l===0&&(e.reset(t.length),n*l>g?e.movePageTo(n-1):e.movePageTo(n))}h();
