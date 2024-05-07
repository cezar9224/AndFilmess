import style from "./Card.module.css"
import { Link } from "react-router-dom"

function Card ({id}){
    return(
       <section className={style.card}>
         
         <Link to = {`/assistir/${id}`}>
            <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="capa"/>
          </Link>
      



       </section>
    )
}

export default Card


