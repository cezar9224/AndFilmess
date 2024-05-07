import styles from "./category.module.css" 
import videos from "../../json/videos.json"


export const categorias =[
   "Geografia",
   "Como fazer e usar",
   "Astronomia e Geografia",
   "Climatologia, Meteorologia, Vegetação",
   "Geologia e Hidrografia"
   ]
   
   export function filterCategory(id){
      
   return videos.filter(video => video.category === categorias[id])
   
     
   }


function Category ({category, children }){
    return(
      <section className={styles.category}> 
    
    <h2>{category}</h2>
       <div>
          {children}
       </div> 
    </section> 
    )
}

export default Category