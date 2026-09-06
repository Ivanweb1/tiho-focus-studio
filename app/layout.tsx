import type {Metadata} from 'next';
import './globals.css';
import './closing.css';
import './app-showcase.css';
import './product-sections.css';
export const metadata:Metadata={title:'Тихо — спокойный трекер задач и фокуса',description:'Собирайте задачи, выбирайте главное и работайте фокус-сессиями в спокойном интерфейсе без визуального шума.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
