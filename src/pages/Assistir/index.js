import { useParams } from "react-router-dom"
import Container from "../../components/Container"
import Header from "../../components/Header"
import Footer from "../../components/footer"
import style from "./assistir.module.css"
import videos from "../../json/videos.json"
import PaginaNlocaizada from "../paginaNlocalizada"


function Assitir(){
  const params = useParams()
  const video = videos.find((video) => {return video.id === params.id})
  if (!video) {return <PaginaNlocaizada/>}

    return (
       <>
          <Header/>
            <Container>
          <section className={style.assistir}>
           <h1> Assistir </h1>
           <iframe width="854"
            height="480"
             src= {`https://www.youtube.com/embed/${video.id}`} title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerpolicy="strict-origin-when-cross-origin"
               allowfullscreen></iframe>
           </section> 
           </Container>
           <Footer/>
       
       </>
    )
}
 
export default Assitir