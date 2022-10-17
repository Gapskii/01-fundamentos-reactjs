import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css'

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