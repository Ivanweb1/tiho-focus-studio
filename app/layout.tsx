import type {Metadata} from 'next';
import './globals.css';
import './closing.css';
import './app-showcase.css';
export const metadata:Metadata={title:'Тихо — пространство для главного',description:'Меньше шума. Больше смысла. Соберите задачи и внимание в одном спокойном пространстве.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
