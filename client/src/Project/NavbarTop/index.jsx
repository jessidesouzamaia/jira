import React, { useState } from "react"
import { ContainerNavRight, ContainerImage, ContainerItens, Item, ItemText, NavTop } from "./Styles"
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import OpenTop from "./openTop";

const ProjectNavbarTop = () =>{
    const[active,setActive] = useState(false);
    const toogleMode = () =>{
        setActive(!active)
    }
      const navbar = [{
          nome:"Seu trabalho",
          elements:["teste1","teste2","teste1","teste2","teste3"]
    },{
        nome:"Projetos",
        elements:["teste1","teste2","teste1","teste2","teste4"]
    },
    {
        nome:"Filtros",
        elements:["teste1","teste2","teste1","teste2","teste5"]
    },
    {
        nome:"Painéis de controle",
        elements:["teste1","teste2","teste1","teste2","teste6"]
    },
    {
      nome:"Pessoas",
      elements:["teste1","teste2","teste1","teste2","teste7"]
    },
    {
      nome:"Aplicativos",
      elements:["teste1","teste2","teste1","teste2","teste8"]
    }]
return(
<NavTop>
    <ContainerItens>
        <ContainerImage>
            <img src="./././App/assets/images/cddit.png" alt="Logo CDDit" />
        </ContainerImage>
        
        {OpenTop(navbar,0)}
        {OpenTop(navbar,1)}
        {OpenTop(navbar,2)}
        {OpenTop(navbar,3)}
        {OpenTop(navbar,4)}
        {OpenTop(navbar,5)}

        <ContainerNavRight>
            <div>
                <BsFillGrid3X3GapFill color="white" fontSize={16} cursor="pointer" onClick={toogleMode}/>
            </div>
            <nav className={active ? "menu menu-open" : "menu menu-close"}>
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">product</a></li>
                <li><a href="">contact</a></li>
                <li><a href="">about us</a></li>
            </ul>
          </nav>
        
        </ContainerNavRight>
        
      
        
        
    </ContainerItens>

</NavTop>
)}
export default ProjectNavbarTop