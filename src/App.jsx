import { Post } from "./components/Post"
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Diego Fernandes" 
            content="Conteúdo"
          />
          <Post 
            author="Diego Fernandes" 
            content="Conteúdo"
          />
        </main>
      </div>
    </>
  )
}

export default App
