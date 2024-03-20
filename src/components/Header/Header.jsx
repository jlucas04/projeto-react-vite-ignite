import styles from './Header.module.css'
import IgniteLogo from '../../assets/ignitelogo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={IgniteLogo} alt="Logotipo Ignite" /><h1> Ignite Feed</h1>
        </header>
    )

}