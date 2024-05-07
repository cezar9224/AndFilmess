import Header from "../../components/Header";
import Footer from "../../components/footer";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Category ,{categorias, filterCategory} from "../../components/category";


function Home() {
  return (
    <>
    <Header/>
    <Banner image="favoritos"/>
    <Container>
    

    { categorias.map((category, index)=>
     
          <Category category={category}>
          {filterCategory(index
          ).map((video) => <Card id={video.id} key={video.id} /> )}
          </Category> 
       
     ) 
}  
   
    </Container>
    <Footer/>
    </>
  );
}

export default Home;


