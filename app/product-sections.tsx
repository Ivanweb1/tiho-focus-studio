'use client';

import {useState} from 'react';
import {
  ArrowRight, Bell, CalendarDays, Check, ChevronDown, CircleCheck,
  Cloud, FolderKanban, Globe2, Infinity as InfinityIcon, ListTodo, LockKeyhole,
  MessageCircleMore, Repeat2, Smartphone, TimerReset,
} from 'lucide-react';

const steps=[
  {number:'01',title:'Соберите всё',text:'Запишите задачи и мысли за несколько секунд. Ничего не нужно держать в голове.',icon:ListTodo},
  {number:'02',title:'Выберите главное',text:'Тихо поможет оставить одну приоритетную задачу и убрать остальное из поля зрения.',icon:CircleCheck},
  {number:'03',title:'Включите фокус',text:'Работайте один спокойный отрезок, сделайте паузу и отметьте результат.',icon:TimerReset},
];

const features=[
  {title:'Проекты и области',text:'Разделяйте работу, личные дела и идеи, сохраняя общий спокойный ритм.',icon:FolderKanban},
  {title:'Сроки и календарь',text:'Видьте неделю целиком и планируйте нагрузку без перегруженных таблиц.',icon:CalendarDays},
  {title:'Повторяющиеся задачи',text:'Настройте привычки и регулярные дела один раз.',icon:Repeat2},
  {title:'Мягкие напоминания',text:'Получайте только те уведомления, которые действительно помогают.',icon:Bell},
];

const faqs=[
  ['Можно ли пользоваться бесплатно','Да. Бесплатный план включает задачи, проекты и фокус-таймер без ограничения по времени.'],
  ['Где хранятся мои данные','Данные шифруются и синхронизируются между вашими устройствами. Экспорт доступен в любой момент.'],
  ['Работает ли Тихо без интернета','Да. Задачи и таймер доступны офлайн, изменения синхронизируются после подключения.'],
  ['Можно ли подключить календарь','В версии Plus доступны Google Calendar, Apple Calendar и импорт задач из Telegram.'],
];

export function HowItWorks(){return <section id="how" className="how reveal" aria-labelledby="how-title">
  <div className="product-heading"><span className="eyebrow">КАК РАБОТАЕТ ТИХО</span><h2 id="how-title">От мысли до результата<br/><span className="soft">в три спокойных шага</span></h2></div>
  <div className="step-grid">{steps.map(({number,title,text,icon:Icon})=><article className="step" key={number}><span className="step-number">{number}</span><span className="step-icon"><Icon/></span><h3>{title}</h3><p>{text}</p></article>)}</div>
</section>}

export function FeatureSuite(){return <section id="features" className="feature-suite reveal" aria-labelledby="features-title">
  <div className="product-heading split"><div><span className="eyebrow">ВСЁ НУЖНОЕ РЯДОМ</span><h2 id="features-title">Полноценный трекер<br/><span className="soft">без ощущения перегруза</span></h2></div><p>Планируйте день, проекты и повторяющиеся дела<br/>в одном визуально тихом пространстве</p></div>
  <div className="feature-layout"><div className="feature-list">{features.map(({title,text,icon:Icon})=><article key={title}><span><Icon/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
  <div className="live-ui" aria-label="Пример недельного календаря"><div className="live-top"><span>Моя неделя</span><small>12–18 августа</small></div><div className="week-row">{['ПН','ВТ','СР','ЧТ','ПТ'].map((d,i)=><span className={i===2?'active':''} key={d}><small>{d}</small><b>{12+i}</b></span>)}</div><div className="project-chip"><i/><span><small>ПРОЕКТ</small><strong>Подготовить презентацию</strong></span><em>Сегодня</em></div><div className="mini-task"><Check size={13}/> Собрать структуру</div><div className="mini-task pending"><span/> Подобрать примеры</div><div className="live-footer"><span>2 задачи осталось</span><b>62%</b></div></div></div>
</section>}

export function Platforms(){return <section className="platforms reveal" aria-label="Платформы и интеграции"><div><span className="eyebrow">ВСЕГДА ПОД РУКОЙ</span><h2>Ваши задачи<br/><span className="soft">на каждом устройстве</span></h2><p>Начните на компьютере, продолжите с телефона.<br/>Тихо сохранит контекст и текущий фокус.</p></div><div className="platform-cloud"><span><Globe2/><b>Web</b></span><span><Smartphone/><b>iOS</b></span><span><Smartphone/><b>Android</b></span><span><MessageCircleMore/><b>Telegram</b></span><span><CalendarDays/><b>Calendar</b></span><i><Cloud/> Синхронизировано</i></div></section>}

export function Testimonials(){return <section className="testimonials reveal" aria-labelledby="reviews-title"><div className="product-heading split"><div><span className="eyebrow">ТИХИЕ ИСТОРИИ</span><h2 id="reviews-title">Помогает закончить день<br/><span className="soft">с ясной головой</span></h2></div><div className="rating">4,9 <span>★★★★★</span><small>средняя оценка бета-версии</small></div></div><div className="quote-grid"><blockquote>«Я перестала бесконечно перестраивать списки и наконец начала заканчивать важное»<footer><b>Анна Соколова</b><span>продуктовый дизайнер</span></footer></blockquote><blockquote>«В Тихо достаточно структуры, чтобы не потеряться, и достаточно воздуха, чтобы спокойно работать»<footer><b>Михаил Орлов</b><span>руководитель студии</span></footer></blockquote><blockquote>«Таймер, задачи и статистика в одном ритме. За неделю стало заметно меньше переключений»<footer><b>Лена Юдина</b><span>редактор</span></footer></blockquote></div></section>}

export function Pricing(){return <section id="pricing" className="pricing reveal" aria-labelledby="pricing-title"><div className="product-heading"><span className="eyebrow">ПРОСТЫЕ ТАРИФЫ</span><h2 id="pricing-title">Начните бесплатно<br/><span className="soft">добавьте больше по мере роста</span></h2></div><div className="price-grid"><article><span className="price-label">ТИХО FREE</span><h3>Бесплатно</h3><p>Для личных задач и спокойного знакомства с методом</p><ul><li><Check/> Задачи и проекты</li><li><Check/> Фокус-таймер</li><li><Check/> Недельная статистика</li></ul><a href="#beta">Попробовать бесплатно <ArrowRight/></a></article><article className="featured"><span className="price-label">ТИХО PLUS <em>ПОПУЛЯРНЫЙ</em></span><h3>299 ₽ <small>в месяц</small></h3><p>Для тех, кто хочет собрать работу и привычки в одном месте</p><ul><li><Check/> Всё из Free</li><li><Check/> Календарь и повторения</li><li><Check/> Синхронизация устройств</li><li><Check/> Telegram и интеграции</li></ul><a href="#beta">Попробовать 14 дней <ArrowRight/></a></article></div></section>}

export function FAQ(){return <section id="faq" className="faq reveal" aria-labelledby="faq-title"><div><span className="eyebrow">ВОПРОСЫ И ОТВЕТЫ</span><h2 id="faq-title">Всё, что важно<br/><span className="soft">до первого шага</span></h2><p><LockKeyhole/> Ваши задачи принадлежат только вам</p></div><div>{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<ChevronDown/></summary><p>{a}</p></details>)}</div></section>}

export function BetaSignup(){const [email,setEmail]=useState('');const [sent,setSent]=useState(false);return <section id="beta" className="beta reveal" aria-labelledby="beta-title"><span className="beta-orbit"/><div><span className="eyebrow">РАННИЙ ДОСТУП</span><h2 id="beta-title">Освободите место<br/><span className="soft">для главного</span></h2><p>Оставьте почту и получите приглашение в бета-версию Тихо</p>{sent?<div className="beta-success"><CircleCheck/> Вы в списке. Скоро напишем</div>:<form onSubmit={e=>{e.preventDefault();if(email)setSent(true)}}><label className="sr-only" htmlFor="beta-email">Электронная почта</label><input id="beta-email" required type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)}/><button type="submit">Получить доступ <ArrowRight/></button></form>}<small><InfinityIcon/> Бесплатно во время бета-теста</small></div></section>}
