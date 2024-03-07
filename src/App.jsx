import { Post } from "./Post"
import { Header } from "./components/Header";
import './global.css';

function App() {

  return (
    <>
      <Header />
      <Post 
        author="Diego Fernandes" 
        content="Conteúdo"
      />
    </>
  )
}

export default App
