(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const r={openBurgerBtn:document.querySelector("[data-burger-open]"),closeBurgerBtn:document.querySelector("[data-burger-close]"),burger:document.querySelector("[data-burger]"),navigationLinks:document.querySelectorAll(".navigation a")};r.openBurgerBtn.addEventListener("click",n),r.closeBurgerBtn.addEventListener("click",n),r.navigationLinks.forEach(i=>{i.addEventListener("click",()=>{n()})});function n(){r.burger.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const d=document.querySelector(".go-top");window.addEventListener("scroll",w);d.addEventListener("click",m);function w(){const r=window.pageYOffset,n=document.documentElement.clientHeight;r>n?d.classList.add("go-top--show"):d.classList.remove("go-top--show")}function m(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(m,0))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".navigation").forEach(i=>{i.addEventListener("click",n)});function n(i){i.preventDefault();const l=this.getAttribute("href"),t=document.querySelector(l).offsetTop-50,s=window.pageYOffset,p=t-s-50,a=1e3;let u=null;function f(o){u||(u=o);const c=o-u;window.scrollTo(0,L(c,s,p,a)),c<a&&window.requestAnimationFrame(f)}function L(o,c,g,y){return o/=y/2,o<1?g/2*o*o*o+c:(o-=2,g/2*(o*o*o+2)+c)}window.requestAnimationFrame(f)}});
