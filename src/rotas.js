import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Assistir from "./pages/Assistir"
import PaginaNlocaizada from "./pages/paginaNlocalizada"

 function AppRotas (){
  return (
    <BrowserRouter>
       <Routes>
           <Route path="/" element = {<Home/>}></Route>
           <Route path="/assistir/: id" element = {<Assistir/>}> </Route>
           <Route path="/*" element = {<PaginaNlocaizada/>}> </Route>
           
       </Routes>
    </BrowserRouter>
    
   )
 }

 export default AppRotas