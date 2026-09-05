'use client';
import {useEffect} from 'react';

export function useSceneMotion(){
useEffect(()=>{
 const media=window.matchMedia('(prefers-reduced-motion: reduce)');
 let cleanup=()=>{};
 const setup=()=>{
 cleanup();
 if(media.matches)return;
 const root=document.documentElement;
 const hero=document.querySelector<HTMLElement>('.hero-track');
 const intro=document.querySelector<HTMLElement>('.intro');
 const bento=document.querySelector<HTMLElement>('.bento');
 const rhythm=document.querySelector<HTMLElement>('.rhythm');
 const cards=Array.from(document.querySelectorAll<HTMLElement>('.card'));
 const animations:Animation[]=[];
 const counters=new Set<HTMLElement>();
 const counterFrames=new Set<number>();
 let frame=0,mx=0,my=0,px=0,py=0;
 const clamp=(v:number)=>Math.max(0,Math.min(1,v));
 const render=()=>{
  frame=0;
  px+=(mx-px)*.085;py+=(my-py)*.085;
  root.style.setProperty('--mx',px.toFixed(3));root.style.setProperty('--my',py.toFixed(3));
  if(hero){const r=hero.getBoundingClientRect();const p=clamp(-r.top/Math.max(1,r.height-innerHeight));hero.style.setProperty('--scene',p.toFixed(4));}
  for(const el of [intro,bento,rhythm]){if(!el)continue;const r=el.getBoundingClientRect();el.style.setProperty('--view',clamp((innerHeight-r.top)/(innerHeight+r.height)).toFixed(4));}
  const full=document.documentElement.scrollHeight-innerHeight;root.style.setProperty('--read',String(full>0?scrollY/full:0));
  if(Math.abs(mx-px)>.002||Math.abs(my-py)>.002)request();
 };
 const request=()=>{if(!frame)frame=requestAnimationFrame(render)};
 const pointer=(e:PointerEvent)=>{if(e.pointerType!=='mouse')return;mx=e.clientX/innerWidth*2-1;my=e.clientY/innerHeight*2-1;request()};
 const reset=()=>{mx=0;my=0;request()};
 const count=(el:HTMLElement)=>{if(counters.has(el))return;counters.add(el);const target=Number(el.dataset.count);const t0=performance.now();const tick=(t:number)=>{const p=clamp((t-t0)/1300);el.textContent=String(Math.round(target*(1-Math.pow(1-p,3)))).padStart(2,'0');if(p<1){const id=requestAnimationFrame(tick);counterFrames.add(id)}};const id=requestAnimationFrame(tick);counterFrames.add(id)};
 const observer=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target as HTMLElement;el.classList.add('in-scene');el.querySelectorAll<HTMLElement>('[data-count]').forEach(count);observer.unobserve(el)})},{threshold:.25});
 document.querySelectorAll('.card,.intro,.rhythm,.closing').forEach(el=>observer.observe(el));
 const enters=cards.map(card=>{
  const move=(e:PointerEvent)=>{if(e.pointerType!=='mouse')return;const r=card.getBoundingClientRect();card.style.setProperty('--rx',((e.clientY-r.top)/r.height* -9+4.5)+'deg');card.style.setProperty('--ry',((e.clientX-r.left)/r.width*10-5)+'deg');card.style.setProperty('--light-x',((e.clientX-r.left)/r.width*100)+'%');card.style.setProperty('--light-y',((e.clientY-r.top)/r.height*100)+'%')};
  const leave=()=>{card.style.setProperty('--rx','0deg');card.style.setProperty('--ry','0deg')};
  card.addEventListener('pointermove',move);card.addEventListener('pointerleave',leave);return()=>{card.removeEventListener('pointermove',move);card.removeEventListener('pointerleave',leave)};
 });
 document.querySelectorAll('.hero h1 .line-inner').forEach((el,i)=>animations.push(el.animate([{transform:'translateY(115%) rotate(3deg)',filter:'blur(10px)',opacity:0},{transform:'translateY(0) rotate(0deg)',filter:'blur(0)',opacity:1}],{duration:1300,delay:120+i*170,easing:'cubic-bezier(.16,1,.3,1)',fill:'backwards'})));
 window.addEventListener('scroll',request,{passive:true});window.addEventListener('resize',request);window.addEventListener('pointermove',pointer,{passive:true});document.addEventListener('pointerleave',reset);request();
 cleanup=()=>{cancelAnimationFrame(frame);counterFrames.forEach(cancelAnimationFrame);observer.disconnect();animations.forEach(a=>a.cancel());enters.forEach(f=>f());window.removeEventListener('scroll',request);window.removeEventListener('resize',request);window.removeEventListener('pointermove',pointer);document.removeEventListener('pointerleave',reset);root.style.setProperty('--mx','0');root.style.setProperty('--my','0')};
 };
 setup();media.addEventListener('change',setup);return()=>{cleanup();media.removeEventListener('change',setup)};
},[]);
}
