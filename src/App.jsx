import { Header } from "./components/Header/Header"
import styles from "./App.module.css"
import { Sidebar } from "./components/sidebar/Sidebar"
import './global.css'

function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main></main>
      </div>
    </div>
      

  
  )
}

export default App
