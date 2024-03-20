import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';
import  sidebar  from '../../assets/imagemsidebar.png'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src={sidebar}>
            </img>
            <div className={styles.profile}>
                <img src='https://github.com/jlucas04.png'></img>
                <strong>João Lucas</strong>
                <span>Web Developer</span>

            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>


    )
}