import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header(){
   return(
    <header className={styles.header}>

        <Link to ="/">
        <span>AndFlix</span>
        </Link>

        <nav>
            <Link to ="/">
                Home
            </Link>
               
            <Link to ="/assistir">
                Assistir
            </Link>


        </nav>
    </header>
   )
} 


export default Header;