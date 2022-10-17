import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

const posts = [
  {
    id: 1,
    author: [
      avatarUrl: 'https://github.com/gapskii.png',
      name: 'Mateus Gapski',
      role: 'Web Developer'
    ]
  },
  content: [
    { type: 'paragraph', content: 'Fala galeraa 👋', },
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
    { type: 'link', content: 'jane.design/doctorcare', },
  ],
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
            author="Mateus Gapski" 
            content="lorem ipsun"
          />
          <Post 
            author="Dafheny Pacheco" 
            content="Amigável"
          />
        </main>
      </div>
    </div>
  )
}