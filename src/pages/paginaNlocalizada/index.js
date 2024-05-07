import erro from "./Erro Pagina.jpg"
import styles from "./paginaNmodule.css"
import Header from "../../components/Header"
import Footer from "../../components/footer"

function PaginaNlocaizada(){
    return(
        <>
                <Header/>
                <section className={styles.container}> 
                    <h2>Não conseguimos resposta para este inderesso</h2>
                    <img src={erro} alt="Logo não encontrada"></img>
                </section>
                <Footer/>

        </>
    )
}

export default PaginaNlocaizada