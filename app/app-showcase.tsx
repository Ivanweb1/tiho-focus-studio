import {ArrowUpRight} from 'lucide-react';

const screens = [
  {src:'/app-focus-plan.png',number:'01',label:'ПЛАН ДНЯ',title:'Главное всегда перед глазами',note:'Короткий список без визуального шума'},
  {src:'/app-focus-timer.png',number:'02',label:'ФОКУС',title:'Один спокойный отрезок',note:'Таймер и минимум действий'},
  {src:'/app-focus-insights.png',number:'03',label:'РИТМ',title:'Прогресс без давления',note:'Мягкая статистика за неделю'},
];

export function AppShowcase(){
  return <section id="screens" className="app-showcase reveal" aria-labelledby="screens-heading">
    <div className="showcase-heading">
      <div><span className="eyebrow">ВНУТРИ ТИХО</span><h2 id="screens-heading">Интерфейс, который<br/><span className="soft">не перетягивает внимание</span></h2></div>
      <p>Три состояния одного спокойного дня<br/>от выбора задачи до короткого итога</p>
    </div>
    <div className="screen-gallery">
      {screens.map((screen,index)=><figure className={'screen-card screen-card-'+(index+1)} key={screen.src}>
        <div className="screen-frame"><img src={screen.src} alt={`${screen.title} — экран приложения «Тихо»`} loading="lazy"/><span className="screen-glare" aria-hidden="true"/></div>
        <figcaption><span className="screen-number">{screen.number}</span><span><small>{screen.label}</small><strong>{screen.title}</strong><em>{screen.note}</em></span><span className="screen-arrow" aria-hidden="true"><ArrowUpRight/></span></figcaption>
      </figure>)}
    </div>
  </section>
}
